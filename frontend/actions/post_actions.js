import * as PostApiUtil from '../util/post_api_util';
import * as ApiUserUtil from '../util/user_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_POST_ERRORS = "CLEAR_POST_ERRORS";

const receiveAllPosts = ({ posts, feed_post_ids, current_user_id }) => {

  return {
    type: RECEIVE_ALL_POSTS,
    posts,
    feedPostIds: feed_post_ids,
    currentUserId: current_user_id
  };
};

const receivePost = payload => ({
  type: RECEIVE_POST,
  payload
});

const removePost = postId => ({
  type: REMOVE_POST,
  postId
});

const receivePostErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors
});

export const clearPostErrors = () => ({
  type: CLEAR_POST_ERRORS
});

export const fetchPosts = () => (dispatch) => (
  PostApiUtil.fetchPosts().then(
    (posts) => dispatch(receiveAllPosts(posts))
  )
);

export const fetchPost = (id) => (dispatch) => (
  PostApiUtil.fetchPost(id).then(
    (payload) => dispatch(receivePost(payload)),
    (errors) => dispatch(receivePostErrors(errors))
  )
);

export const createPost = (newPost) => (dispatch) => (
  PostApiUtil.createPost(newPost).then(
    (payload) => dispatch(receivePost(payload)),
    (errors) => dispatch(receivePostErrors(errors.responseJSON))
  )
);

export const updatePost = (post, id) => (dispatch) => (
  PostApiUtil.updatePost(post, id).then(
    (payload) => dispatch(receivePost(payload)),
    (errors) => dispatch(receivePostErrors(errors.responseJSON))
  )
);

export const deletePost = (postId) => (dispatch) => (
  PostApiUtil.deletePost(postId).then(
    () => dispatch(removePost(postId)),
    (errors) => dispatch(receivePostErrors(errors.responseJSON))
  )
);

export const fetchFeed = (userId) => (dispatch) => (
  ApiUserUtil.fetchFeed(userId).then(
    (posts) => dispatch(receiveAllPosts(posts))
  )
);
