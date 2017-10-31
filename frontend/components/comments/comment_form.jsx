import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: '', modalIsOpen: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    this.props.createComment(this.props.postId, this.state);
  }

  handleChange(e) {
    this.setState({ body: e.target.value});
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsClose: false });
  }

  render() {
    if (this.props.currentUser) {
      return (
        <section className='comment-form-container'>
          <form className='comment-form flex-center-hor' onSubmit={this.handleSubmit}>
            <textarea type='text'
              onChange={this.handleChange}
              value={this.state.body}
              placeholder="Write a response..."/>
            <button>Publish</button>
          </form>
        </section>
      );
    } else {
      return (
        <section className='comment-form-container'>
          <form className='comment-form flex-center-hor' onSubmit={this.handleSubmit}>
            <textarea type='text'/>
          </form>
        </section>
      );
    }
  }
}

export default CommentForm;
