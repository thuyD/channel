import React from 'react';
import UserDetails from './user_details.jsx';
import ToggleFollowContainer from './toggle_follow_container.js';
import ReactModal from 'react-modal';

// the user id we are on should be passed in called userId
class FollowModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchFollowees(this.props.userId);
    this.props.fetchFollowers(this.props.userId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.userId !== this.props.userId) {
      this.setState({ openModal: false });
    }
  }

  openModal() {
    this.setState({ openModal: true });
  }

  render() {
    let title;
    let count;
    if (this.props.mode === "following") {
      title = "follows";
      count = `${this.props.followees.length} Following`;
    } else {
      title = "is followed by";
      count = `${this.props.followers.length} Followers`;
    }

    let followees = "";
    if (this.props.followees.length > 0) {
      followees = this.props.followees.map((user) => {
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
      followees = <div className="follows-place-holder">No one yet...</div>;
    }

    let followers = "";
    if(this.props.followers.length > 0) {
      followers = this.props.followers.map((user) => {
        return (
          <div key={user.id} className="follow-user">
            <UserDetails user={user}
              dateToFormat={null}
              bookmark={false}
              bio={true}
              image="medium" />
          </div>
        );
      });
    } else {
      followers = <div className="follows-place-holder">No one yet...</div>;
    }

    const follows = this.props.mode === "following" ? followees : followers;

    return (
      <div>
        <p className="user-profile-following" onClick={this.openModal}>
          {count}
        </p>
        <ReactModal
          isOpen={this.state.openModal}
          onRequestClose={() => this.setState({ openModal: false })}
          className="FollowModal"
          overlayClassName="FollowModalOverlay"
          >
          <section className="follow-modal flex-col">
            <div className="follow-modal-title flex-center-hor"><h3>{this.props.user.name} {title}</h3></div>
            <div className="follow-users flex-col">
              {follows}
            </div>
          </section>
        </ReactModal>
      </div>
    );
  }
}

export default FollowModal;
