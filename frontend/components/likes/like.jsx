import React from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openModal: false }
    this.openModal = this.openModal.bind(this);
    this.handleLikes = this.handleLikes.bind(this);
  }

  handleLikes() {
    this.props.createLike(this.props.postId);
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
        <div className="claps" onClick={this.handleLikes}>
          <i className="fa fa-heart-o fa-lg" aria-hidden="true"></i>
        </div>
      );
    } else {
      return (
        <div className="claps" onClick={this.openModal}>
          <i className="fa fa-heart-o fa-lg" aria-hidden="true"></i>

          <ReactModal
            isOpen={this.state.openModal}
            onRequestClose={this.closeModal.bind(this)}
            className="Modal"
            overlayClassName="Overlay"
            >

            <SessionFormContainer />
          </ReactModal>
        </div>
      );
    }
  }
}

export default Like;
