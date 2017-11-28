import React from 'react';
import UserProfileNavContainer from './user_profile_nav_container.js';

class ContributedContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "stories",
    };

    this.handleNav = this.handleNav.bind(this);
  }

  handleNav(field) {
    return () => {
      this.setState({ content: field });
    };
  }

  render() {
    return (
      <section className="user-profile-nav-container">
        <div className="user-profile-nav-list">
          <p onClick={this.handleNav("stories")}>Stories</p>
          <p onClick={this.handleNav("responses")}>Responses</p>
          <p onClick={this.handleNav("likes")}>Claps</p>
        </div>
        <section className="user-profile-content">
          <UserProfileNavContainer type={this.state.content} userId={this.props.userId} />
        </section>
      </section>
    );
  }

}

export default ContributedContent;
