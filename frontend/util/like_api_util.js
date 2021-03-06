export const createLike = (postId) => (
  $.ajax({
    method: 'post',
    url: `api/posts/${postId}/likes`
  })
);

export const deleteLike = (postId) => (
  $.ajax({
    method: 'delete',
    url: `api/posts/${postId}/likes`
  })
);

export const likedPost = (postId) => (
  $.ajax({
    method: 'get',
    url: `api/posts/${postId}/likes`
  })
);
