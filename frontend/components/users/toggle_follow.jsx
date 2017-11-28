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
      this.state = { following: true };
    } else {
      this.state = { following: false };
    }
    this.handleFollowing = this.handleFollowing.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentWillReceiveProps(newProps) {
    let oldFolloweeIds = 0;
    let newFolloweeIds = 0;
    
    if (this.props.currentUser.followeeIds && newProps.currentUser.followeeIds) {
      oldFolloweeIds = this.props.currentUser.followeeIds.length;
      newFolloweeIds = newProps.currentUser.followeeIds.length;
    }

    if (newFolloweeIds !== oldFolloweeIds) {
      if (newFolloweeIds && newProps.currentUser.followeeIds.some(
        (el) => el === newProps.followeeId)
      ) {
        this.setState({ following: true });
      } else {
        this.setState({ following: false });
      }
    }
  }

  handleFollowing() {
    if (this.state.following) {
      this.props.unfollowUser(this.props.followeeId).then(() => {
        this.setState({ following: false });
      });
    } else {
      this.props.followUser(this.props.followeeId).then(() => {
        this.setState({ following: true });
      });
    }
  }

  openModal() {
    this.props.toggleModal(true);
  }

  closeModal() {
    this.props.toggleModal(false);
  }

  render() {
    const followState = this.state.following ? "Unfollow" : "Follow";
    if (Object.keys(this.props.currentUser).length === 0) {
      return (
        <div>
          <div onClick={this.openModal} className="gen-button flex-center-ver follow-button">
            <p>Follow</p>
          </div>
          <ReactModal
            isOpen={this.props.modalState.openModal}
            onRequestClose={this.closeModal.bind(this)}
            className="Modal"
            overlayClassName="Overlay">
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
