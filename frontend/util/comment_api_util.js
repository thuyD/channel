export const fetchComment = (commentId) => (
  $.ajax({
    method: 'get',
    url: `api/comments/${commentId}`,
  })
);

export const createComment = (postId, comment) => {
  return $.ajax({
    method: 'post',
    url: `api/posts/${postId}/comments`,
    data: { comment }
  });
};

export const deleteComment = (commentId) => (
  $.ajax({
    method: 'delete',
    url: `api/comments/${commentId}`
  })
);
