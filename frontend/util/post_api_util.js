export const fetchPosts = () => (
  $.ajax({
    method: 'get',
    url: 'api/posts'
  })
);

export const fetchPost = (id) => (
  $.ajax({
    method: 'get',
    url: `api/posts/${id}`
  })
);

export const createPost = (formData) => (
  $.ajax({
    method: 'post',
    url: 'api/posts',
    contentType: false,
    processData: false,
    data: formData
  })
);

export const updatePost = (formData, id) => {
  return $.ajax({
    method: 'patch',
    url: `api/posts/${id}`,
    contentType: false,
    processData: false,
    data: formData
  });
};

export const deletePost = (id) => (
  $.ajax({
    method: 'delete',
    url: `api/posts/${id}`
  })
);
