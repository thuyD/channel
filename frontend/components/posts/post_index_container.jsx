import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, fetchFeed } from '../../actions/post_actions';

const mapStateToProps = (state) => {
  let currentUser = false;

  if (state.session.currentUser) {
    currentUser = state.session.currentUser.id;
  }

  let posts = Object.values(state.entities.posts);

  if (currentUser) {
    const feedPostIds = state.entities.users[currentUser].feedPostIds;
    if (feedPostIds && feedPostIds.length > 0) {
      posts = feedPostIds.map((id) => {
        return state.entities.posts[id];
      });
    }
  }

  return {
    posts: posts,
    currentUser
  };
};


const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchFeed: (userId) => dispatch(fetchFeed(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
