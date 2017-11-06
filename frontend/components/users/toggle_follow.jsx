import React from 'react';

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

  render() {
    const followState = this.state.following ? "Unfollow" : "Follow";

    return (
      <div onClick={this.handleFollowing} className="gen-button flex-center-ver follow-button">
        {followState}
      </div>
    );
  }
}

export default ToggleFollow;

//other components need to pass it an inital following state
//a post need to find out if the currently user is following the author
//a user profile will also give the current user info
//this should all be prefetched when the current user signs in
