import React from 'react';
import ReactModal from 'react-modal';

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
    this.state = { body: '', openModal: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.props.postId, this.state);
  }

  handleChange(e) {
    this.setState({ body: e.target.value});
  }

  openModal() {
    this.setState({ openModal: true });
  }

  closeModal(e) {
    this.setState({ openModal: false });
  }

  render() {
    if (this.props.currentUser) {
      return (
        <section className='comment-form-container'>
          <p className="comment-tag">Responses</p>
          <form className='comment-form' onSubmit={this.handleSubmit}>
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
          <div className="comment-tag"><p>Responses</p></div>
          <section className='comment-form flex-center-hor'>
            <div id="comment-form-fake" className="flex-center-ver" onClick={this.openModal}>
              <p><i className="fa fa-comment-o fa-lg" aria-hidden="true"></i>  Write a response...</p>
            </div>
          </section>

          <ReactModal
            isOpen={this.state.openModal}
            onRequestClose={this.closeModal.bind(this)}
            className="Modal"
            overlayClassName="Overlay"
            >
            <p>Hello</p>
            <button onClick={this.closeModal.bind(this)}>Close</button>
          </ReactModal>
        </section>
      );
    }
  }
}

export default CommentForm;
