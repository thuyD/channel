import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  let ownPost = null;
  if (ownProps.match.path === "/posts/:postId") {
    const post = state.entities.posts[ownProps.match.params.postId];
    if ( currentUser && post && currentUser.id === post.author_id ) {
      ownPost = post.id;
    }
  }

  return { currentUser, ownPost };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
