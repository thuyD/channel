import React from 'react';
import ReactModal from 'react-modal';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: '', openModal: false, openTextBox: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.expand = this.expand.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.props.postId, this.state).then(() => {
      this.setState = { body: '' };
    });
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

  expand() {
    this.setState({ openTextBox: true });
  }

  render() {

    if (this.props.currentUser) {
      const user = (
        <div className="user-avatar">
          <img src={this.props.currentUser.image_url_t}/>
        </div>
      )
      return (
        <section className='comment-form-container'>
          <p className="comment-tag">Responses</p>
          <div className="comment-form-wrapper comment-input" onClick={this.expand}>
            {this.state.openTextBox ? (
              <div>
                <div className="comment-form-user flex-center-ver">
                  {user}
                  <p>{this.props.currentUser.name}</p>
                </div>
                <form className='comment-form flex-col' onSubmit={this.handleSubmit}>
                  <textarea type='text'
                    onChange={this.handleChange}
                    value={this.state.body}
                    placeholder="Write a response..."
                    className="comment-textarea"/>
                  <button id="comment-submit" className="gen-button">Publish</button>
                </form>
              </div>
            ) : (
            <div className="comment-standin flex-center-ver">
              {user}
              <p>  Write a response...</p>
            </div>)
          }
          </div>
        </section>
      );
    } else {
      return (
        <section className='comment-form-container'>
          <div className="comment-tag"><p>Responses</p></div>
          <section className='comment-form flex-center-hor'>
            <div id="comment-form-fake" className="flex-center-ver comment-input" onClick={this.openModal}>
              <p><i className="fa fa-comment-o fa-lg" aria-hidden="true"></i>  Write a response...</p>
            </div>
          </section>

          <ReactModal
            isOpen={this.state.openModal}
            onRequestClose={this.closeModal.bind(this)}
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
