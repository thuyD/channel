import React from 'react';
import ReactModal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';

class ToggleFollow extends React.Component {
  constructor(props) {
    super(props);
    const followeeIds = this.props.currentUser.followeeIds;
    if (followeeIds && followeeIds.some(
      (el) => el === this.props.followeeId)
    ) {
      this.state = { following: true, openModal: false };
    } else {
      this.state = { following: false, openModal: false };
    }
    this.handleFollowing = this.handleFollowing.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  handleFollowing() {
    if (this.state.following) {
      this.props.unfollowUser(this.props.followeeId);
      this.setState({ following: false });
    } else {
      this.props.followUser(this.props.followeeId);
      this.setState({ following: true });
    }
  }

  openModal() {
    this.setState({ openModal: true });
  }

  closeModal(e) {
    this.setState({ openModal: false });
  }

  render() {
    const followState = this.state.following ? "Unfollow" : "Follow";
    if (Object.keys(this.props.currentUser).length === 0) {
      return (
        <div onClick={this.openModal} className="gen-button flex-center-ver follow-button">
          <p>Follow</p>
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
    } else {
      return (
        <div onClick={this.handleFollowing} className="gen-button flex-center-ver follow-button">
          {followState}
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
