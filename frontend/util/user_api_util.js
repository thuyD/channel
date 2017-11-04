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
