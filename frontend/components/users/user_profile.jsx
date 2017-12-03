import React from 'react';
import UserProfileNavContainer from './user_profile_nav_container';
import UserFolloweeDetails from './user_followee_details.jsx';
import ToggleFollowContainer from './toggle_follow_container';
import FollowModalContainer from './follow_modal_container.js';
import ContributedContent from './contributed_content.jsx';
import NotFound from '../errors/not_found.jsx';
import ReactModal from 'react-modal';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formType: 'norm' };

    this.handleCancel = this.handleCancel.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  //componentDidMount for users that was not fetched yet by post show
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId).then(
      this.props.clearUserErrors()
    );
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.userId !== newProps.match.params.userId) {
      this.props.fetchUser(newProps.match.params.userId);
      this.closeModal();
    }
  }

  componentWillUnmount() {
    this.closeModal();
  }

  handleEdit() {
    this.setState({ formType: "edit" });
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
    if (this.state.imageFile) formData.append("user[avatar]", this.state.imageFile);

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
      this.setState({ imageFile: file, image_url_l: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  openModal(name) {
    this.props.toggleModal(name);
  }

  closeModal() {
    this.props.toggleModal(null);
  }

  toggleModal(mode) {
    let count = "";
    let modalVisibility = false;
    if (mode === "followees") {
      count = `${this.props.user.followeeIds.length} Following`;
      modalVisibility = this.props.isFolloweesModalVisible;
    } else {
      count = `${this.props.user.followerIds.length} Followers`;
      modalVisibility = this.props.isFollowersModalVisible;
    }

    return (
      <div>
        <p className="user-profile-following" onClick={() => this.openModal(mode)}>
          {count}
        </p>
        <ReactModal
          isOpen={modalVisibility}
          onRequestClose={this.closeModal.bind(this)}
          className="FollowModal"
          overlayClassName="FollowModalOverlay"
          >
          <FollowModalContainer follow={mode} userId={this.props.match.params.userId}/>
        </ReactModal>
      </div>
    );
  }

  render() {
    if (this.props.errors === 404) { return <NotFound item="User"/>; }
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
              <div className="user-avatar-l"><img src={this.props.user.image_url_l} /></div>
            </div>
            <div className="follows">
              {this.toggleModal("followees")}  ·  {this.toggleModal("followers")}
            </div>
            {normButton}
          </section>
          <ContributedContent userId={this.props.match.params.userId} />
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
                <label className="user-avatar-l user-profile-add-file">
                  <i className="fa fa-camera" aria-hidden="true"></i>
                  <input type="file" onChange={this.updateFile}/>
                </label>
                <div className="user-avatar-l">
                  <img src={this.state.image_url_l} />
                </div>
              </div>
            </div>
            <div>
              <button className="gen-button">Save</button>
              <button
                className="gen-button user-profile-cancel"
                onClick={this.handleCancel}>Cancel</button>
            </div>
          </form>
          <ContributedContent userId={this.props.match.params.userId} />
        </main>
      );
    }
  }
}

export default UserProfile;
