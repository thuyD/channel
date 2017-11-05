import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;

    this.handleCancel = this.handleCancel.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
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
            <p>Following</p>
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
                  onChange={this.update('name')} />
                <input type="text"
                  value={this.state.bio}
                  onChange={this.update('bio')} />
              </div>
              <div>
                <label id= "post-new-add-file" className="gen-button">Upload a photo
                  <input type="file" onChange={this.updateFile}/>
                </label>
                <img src={this.state.image_url_m} />
              </div>
            </div>
            <p>Following</p>
            <button className="gen-button user-profile-edit">Save</button>
          </form>
          <button className="gen-button user-profile-edit" onClick={this.handleCancel}>Cancel</button>
        </main>
      );
    }
  }
}

export default UserProfile;
