import { connect } from 'react-redux';
import PostForm from './post_form';
import { fetchPost, createPost, updatePost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  let errors = state.errors.post;
  let post = { title: "", body: "", imageFile: null, imageUrl: '' };
  let formType = "new";

  if (ownProps.match.params.postId) {
    post = state.entities.posts[ownProps.match.params.postId];
    formType = "edit";
  }
  return { post, formType, errors };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.match.params.postId ? updatePost : createPost;
  return {
    fetchPost: () => dispatch(fetchPost(ownProps.match.params.postId)),
    action: (post) => dispatch(action(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
