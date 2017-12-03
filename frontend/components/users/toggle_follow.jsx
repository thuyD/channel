import React from 'react';
import ReactModal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';

class ToggleFollow extends React.Component {
  constructor(props) {
    super(props);
    this.handleFollowing = this.handleFollowing.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  handleFollowing() {
    if (this.props.following) {
      this.props.unfollowUser(this.props.followeeId);
    } else {
      this.props.followUser(this.props.followeeId);
    }
  }

  openModal() {
    this.props.toggleModal("session");
  }

  closeModal() {
    this.props.toggleModal(null);
  }

  render() {
    const followState = this.props.following ? "Unfollow" : "Follow";
    if (Object.keys(this.props.currentUser).length === 0) {
      return (
        <div>
          <div onClick={this.openModal} className="gen-button flex-center-ver follow-button">
            <p>Follow</p>
          </div>
          <ReactModal
            isOpen={this.props.isModalVisible}
            onRequestClose={this.closeModal.bind(this)}
            className="Modal"
            overlayClassName="Overlay">
            <SessionFormContainer />
          </ReactModal>
        </div>
      );
    } else {
      return (
        <div>
          <div onClick={this.handleFollowing} className="gen-button flex-center-ver follow-button">
            {followState}
          </div>
        </div>
      );
    }
  }
}

export default ToggleFollow;

//other components need to pass it an inital following state
//a post need to find out if the currently user is following the author
//a user profile will also give the current user info
//this should all be prefetched when the current user signs in
