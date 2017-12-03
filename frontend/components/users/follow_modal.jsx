import React from 'react';
import UserDetails from './user_details.jsx';
import ToggleFollowContainer from './toggle_follow_container.js';
import ReactModal from 'react-modal';

class FollowModal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFollowees(this.props.userId);
    this.props.fetchFollowers(this.props.userId);
  }

  follows() {
    let followUsers = this.props.followees;
    if (this.props.mode === "followers") {
      followUsers = this.props.followers;
    }

    if (followUsers.length > 0) {
      return followUsers.map((user) => {
        return (
          <div key={user.id} className="follow-user">
            <UserDetails user={user}
              dateToFormat={null}
              bookmark={false}
              bio={true}
              image="medium"
               />
          </div>
        );
      });
    } else {
      return <div className="follows-place-holder">No one yet...</div>;
    }
  }

  render() {
    let title;
    if (this.props.mode === "followees") {
      title = "follows";
    } else {
      title = "is followed by";
    }

    return (
      <section className="follow-modal flex-col">
        <div className="follow-modal-title flex-center-hor">
          <h3>{this.props.user.name} {title}</h3>
        </div>
        <div className="follow-users flex-col">
          {this.follows()}
        </div>
      </section>
    );
  }
}

export default FollowModal;
