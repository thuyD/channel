import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_NEW_POST = "RECEIVE_NEW_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_ERRORS";

const receiveAllPosts = posts => {
  return {
    type: RECEIVE_ALL_POSTS,
    posts
  };
};

const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

const receiveNewPost = post => ({
  type: RECEIVE_NEW_POST,
  post
});

const removePost = postId => ({
  type: REMOVE_POST,
  postId
});

const receivePostErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors
});

export const fetchPosts = () => dispatch => (
  PostApiUtil.fetchPosts().then(
    (posts) => dispatch(receiveAllPosts(posts))
  )
);

export const fetchPost = id => dispatch => (
  PostApiUtil.fetchPost(id).then(
    (post) => dispatch(receivePost(post))
  )
);

export const createPost = newPost => dispatch => (
  PostApiUtil.createPost(newPost).then(
    (post) => dispatch(receivePost(post)),
    (errors) => dispatch(receivePostErrors(errors.responseJSON))
  )
);

export const updatePost = (post, id) => dispatch => (
  PostApiUtil.updatePost(post, id).then(
    (updatedPost) => dispatch(receivePost(updatedPost)),
    (errors) => dispatch(receivePostErrors(errors))
  )
);

export const deletePost = postId => dispatch => (
  PostApiUtil.deletePost(postId).then(
    (post) => dispatch(removePost(postId))
  )
);
