import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.state.formType = 'norm';
    this.state.component = 'stories';

    this.handleCancel = this.handleCancel.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleNav = this.handleNav.bind(this);
  }

  handleEdit() {
    this.setState({ formType: "edit" });
  }

  handleNav(field) {
    return () => {
      this.setState({ [field]: field });
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
    this.setState({ formType: "norm"});
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

  render() {

    const nav = (
      <section>
        <div className="user-profile-nav">
          <p onClick={this.handleNav("stories")}>Stories</p>
          <p onClick={this.handleNav("responses")}>Responses</p>
          <p onClick={this.handleNav("claps")}>Claps</p>
        </div>
        <section className="user-profile-content">
    
        </section>
      </section>
    );

    if (this.state.formType === "norm") {
      return (
        <main className="user-profile-container flex-center-hor">
          <section className="user-profile-header flex-col">
            <div className="user-profile-details">
              <div className="user-name-bio">
                <h2>{this.props.currentUser.name}</h2>
                <p>{this.props.currentUser.bio}</p>
              </div>
              <div className="user-avatar-m"><img src={this.props.currentUser.image_url_m} /></div>
            </div>
            <p>{this.state.followeeIds.length} Following</p>
            <button className="gen-button user-profile-edit" onClick={this.handleEdit}>Edit</button>
          </section>
        </main>
      );
    } else {
      return (
        <main className="user-profile-container flex-center-hor">
          <form className="user-profile-header flex-col" onSubmit={this.handleSubmit}>
            <div className="user-profile-details">
              <div className="user-name-bio">
                <input type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="user-name"/>
                <textarea type="text"
                  value={this.state.bio}
                  onChange={this.update('bio')}
                  className="user-bio"/>
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
            <p>{this.state.followeeIds.length} Following</p>
            <div>
              <button className="gen-button">Save</button>
              <button className="gen-button user-profile-cancel" onClick={this.handleCancel}>Cancel</button>
            </div>
          </form>
        </main>
      );
    }
  }
}

export default UserProfile;
