import React from 'react';
import ReactModal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: '', openTextBox: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.expand = this.expand.bind(this);
    this.outOfFocus = this.outOfFocus.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.props.postId, this.state).then(() => {
      this.setState({ body: '' });
    });
  }

  handleChange(e) {
    this.setState({ body: e.target.value});
  }

  openModal() {
    this.props.toggleModal("session");
  }

  closeModal() {
    this.props.toggleModal(null);
  }

  expand() {
    this.setState({ openTextBox: true });
    this.commentInput.focus();
  }

  outOfFocus() {
    if (this.state.body.length < 1) {
      this.setState({ openTextBox: false });
    }
  }

  render() {
    if (this.props.currentUser) {
      const user = (
        <div className="user-avatar">
          <img src={this.props.currentUser.image_url_t}/>
        </div>
      );
      const userName = this.state.openTextBox ? <p>{this.props.currentUser.name}</p> : '';
      const textAreaBody = this.state.openTextBox ? '' : (<p>Write a response...</p>);
      const submitButton = this.state.openTextBox ?
      (<button id="comment-submit" className="gen-button">Publish</button>): null;
      const commentClassName = this.state.openTextBox ? 'comment-textarea' : 'comment-form-standin';

      return (
        <section className='comment-form-container'>
          <div className='comment-form-responses'>
            <p className="comment-tag">Responses</p>
            <div className="comment-form-wrapper" >
              <div>
                <div className="comment-form-user flex-center-ver">
                  {user}
                  {userName}
                </div>
                <form className='comment-form flex-col' onSubmit={this.handleSubmit}>
                  <textarea type='text'
                    onChange={this.handleChange}
                    value={this.state.body}
                    onFocus={this.expand}
                    placeholder="Write a response..."
                    className={commentClassName}
                    ref={((input) => { this.commentInput = input; }).bind(this)}
                    onBlur={this.outOfFocus}>{textAreaBody}</textarea>
                  {submitButton}
                </form>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className='comment-form-container'>
          <div className='comment-form-responses'>
            <p className="comment-tag">Responses</p>
            <section className='comment-form-wrapper'>
              <div className="flex-center-ver comment-form-fake" onClick={this.openModal}>
                <p><i className="fa fa-comment-o fa-lg" aria-hidden="true"></i>  Write a response...</p>
              </div>
            </section>
          </div>

          <ReactModal
            isOpen={this.props.isModalVisible}
            onRequestClose={this.closeModal.bind(this)}
            className="Modal"
            overlayClassName="Overlay"
            >

            <SessionFormContainer />
          </ReactModal>
        </section>
      );
    }
  }
}

export default CommentForm;
