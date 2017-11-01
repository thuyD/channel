import React from 'react';
import ReactQuill from 'react-quill';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.post) {
      this.state = this.props.post;
    } else {
      this.state = { title: "", body: "", imageFile: null, imageUrl: '' };
    }

    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === "edit") {
      this.props.fetchPost();
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.post);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[title]", this.state.title);
    formData.append("post[body]", this.state.body);

    if (this.state.imageFile) formData.append("post[image]", this.state.imageFile);
    const redirect = (id) => this.props.history.push(`/posts/${id}`);
    let id = this.props.match.params.postId || null;
    this.props.action(formData, id).then(
      (response) => {
        redirect(response.post.id);
      }
    );
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  updateBody(value) {
    this.setState({ body: value });
  }

  updateFile(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  renderErrors() {
    const errors = this.props.errors.map((error, idx) => {
      return (<li key={idx}>{error}</li>);
    });

    return(
      <ul>
        {errors}
      </ul>
    );
  }

  render() {
    return (
      <div className="post-new-container flex-col">
        <div className="post-errors">{this.renderErrors()}</div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            value={this.state.title}
            onChange={this.updateTitle}
            placeholder="Title"
            className="post-new-title"/>
          <div className="post-new-photo-preview">
            <label id= "post-new-add-file" className="gen-button">Upload a photo
              <input type="file" onChange={this.updateFile}/>
            </label>
            <img src={this.state.imageUrl} />
          </div>
          <ReactQuill defaultValue={this.state.body}
            onChange={this.updateBody}
            placeholder="Tell your story..."/>
          <div className="post-new-button">
            <button className="gen-button">
              {this.props.formType === "new" ? "Submit" : "Update"}
            </button>
          </div>
        </form>
      </div>
    );
  }

}

export default PostForm;
