export const followUser = (id) => (
  $.ajax({
    method: 'patch',
    url: `/api/users/${id}/follow`
  })
);

export const unfollowUser = (id) => (
  $.ajax({
    method: 'patch',
    url: `/api/users/${id}/unfollow`
  })
);

export const updateUser = (formData) => (
  $.ajax({
    method: 'patch',
    url: 'api/users',
    contentType: false,
    processData: false,
    data: formData
  })
);

export const fetchUser = (id) => (
  $.ajax({
    method: 'get',
    url: `api/users/${id}`
  })
);
