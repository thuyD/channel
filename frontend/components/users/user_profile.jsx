import React from 'react';
import UserProfileNavContainer from './user_profile_nav_container';
import ReactModal from 'react-modal';
import UserFolloweeDetails from './user_followee_details.jsx';
import ToggleFollowContainer from './toggle_follow_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.state.formType = 'norm';
    this.state.content = 'stories';
    this.state.openModal = false;

    this.handleCancel = this.handleCancel.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleNav = this.handleNav.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  //componentDidMount for users that was not fetched yet by post show
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.userId !== newProps.match.params.userId) {
      this.props.fetchUser(newProps.match.params.userId).then((user) => {
        this.setState(user);
      });
    } else {
      this.setState(newProps.user);
    }
  }

  handleEdit() {
    this.setState({ formType: "edit" });
  }

  handleNav(field) {
    return () => {
      this.setState({ content: field });
    };
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user[name]", this.state.name);
    formData.append("user[bio]", this.state.bio);
    if (this.state.imageFile) formData.append("user[image]", this.state.imageFile);

    this.props.updateUser(formData).then(
      () => this.setState({ formType: "norm" })
    );
  }

  handleCancel() {
    this.setState({ formType: "norm" });
  }

  updateFile(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, image_url_m: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  openModal() {
    this.setState({ openModal: true });
  }

  closeModal(e) {
    this.setState({ openModal: false });
  }

  render() {
    const nav = (
      <section className="user-profile-nav-container">
        <div className="user-profile-nav-list">
          <p onClick={this.handleNav("stories")}>Stories</p>
          <p onClick={this.handleNav("responses")}>Responses</p>
          <p onClick={this.handleNav("likes")}>Claps</p>
        </div>
        <section className="user-profile-content">
          <UserProfileNavContainer type={this.state.content} />
        </section>
      </section>
    );

    const following = (
      <div>
        <p className="user-profile-following" onClick={this.openModal}>
          {this.state.followeeIds.length} Following
        </p>
        <ReactModal
          isOpen={this.state.openModal}
          onRequestClose={this.closeModal.bind(this)}
          className="Modal"
          overlayClassName="Overlay"
          >

          <h3>{this.props.user.name} follows</h3>

        </ReactModal>
      </div>
    );

    const followers = (
      <div>
        <p className="user-profile-following" onClick={this.openModal}>
          {this.state.followerIds.length} Followers
        </p>
        <ReactModal
          isOpen={this.state.openModal}
          onRequestClose={this.closeModal.bind(this)}
          className="Modal"
          overlayClassName="Overlay"
          >

          <h3>{this.props.user.name} is followed by</h3>

        </ReactModal>
      </div>
    );
    

    if (this.state.formType === "norm") {
      const normButton = this.props.currentUserId === this.props.user.id ?
        (<button className="gen-button user-profile-edit" onClick={this.handleEdit}>Edit</button>) :
        (<ToggleFollowContainer followeeId={this.props.user.id} />);
      return (
        <main className="user-profile-container">
          <section className="user-profile-header flex-col">
            <div className="user-profile-details">
              <div className="user-name-bio">
                <h2>{this.props.user.name}</h2>
                <p>{this.props.user.bio}</p>
              </div>
              <div className="user-avatar-m"><img src={this.props.user.image_url_m} /></div>
            </div>
            <div>{following}  ·  {followers}</div>
            {normButton}
          </section>
          {nav}
        </main>
      );
    } else {
      return (
        <main className="user-profile-container">
          <form className="user-profile-header flex-col" onSubmit={this.handleSubmit}>
            <div className="user-profile-details">
              <div className="user-name-bio">
                <input type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="user-name"
                  placeholder="Full name"/>
                <textarea type="text"
                  value={this.state.bio}
                  onChange={this.update('bio')}
                  className="user-bio"
                  placeholder="Background information..."/>
              </div>
              <div className="user-profile-edit-photo">
                <label className="user-avatar-m user-profile-add-file">
                  <i className="fa fa-camera" aria-hidden="true"></i>
                  <input type="file" onChange={this.updateFile}/>
                </label>
                <div className="user-avatar-m">
                  <img src={this.state.image_url_m} />
                </div>
              </div>
            </div>
            <div>{following}  ·  {followers}</div>
            <div>
              <button className="gen-button">Save</button>
              <button className="gen-button user-profile-cancel" onClick={this.handleCancel}>Cancel</button>
            </div>
          </form>
          {nav}
        </main>
      );
    }
  }
}

export default UserProfile;
