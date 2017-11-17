import React from 'react';
import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import UserDetails from './user_details.jsx';
import ToggleFollowContainer from './toggle_follow_container.js';

//the user id we are on should be passed in called userId

class FollowModal extends React.Component {
  constructor(props) {
    super(props);
    const userId = this.props.userId;
    const user = this.props.users[userId];
    const users = this.props.users;

    let followees = user.followeeIds;
    if (followees.length > 0) {
      followees = followees.map((id) => {
        return users[id];
      });
    }

    let followers = user.followerIds;
    if (followers.length > 0) {
      followers = followers.map((id) => {
        return users[id];
      });
    }

    const mode = this.props.follow;

    this.state = {
      mode: mode,
      user: user,
      followees: followees,
      followers: followers,
    };
  }

  render() {
    const title = this.mode === "following" ?
      title = "follows" :
      title = "is_followed_by";

    const followees = this.state.followees.map((user) => {
      return (
        <div>
          <UserDetails user={user}
            dateToFormat={null}
            bookmark={false}
            bio={true}
            image="medium" />
          <ToggleFollowContainer />
        </div>
      );
    });

    const followers = this.state.followers.map((user) => {
      return (
        <div>
          <UserDetails user={user}
            dateToFormat={null}
            bookmark={false}
            bio={true}
            image="medium" />
          <ToggleFollowContainer />
        </div>
      );
    });

    const follows = this.mode === "following" ? followees : followers;

    return (
      <section>
        <h3>{this.user.name} {title}</h3>
        <div>
          {follows}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return state.entities.users;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowModal);
