json.extract! user, :id, :username, :bio, :name
json.image_url_t asset_path(user.avatar.url(:thumb))
json.image_url_m asset_path(user.avatar.url(:medium))

#follows
if user.followers.empty?
  json.followerIds([])
else
  json.followerIds do
    json.array! user.followers.map(&:id)
  end
end

if user.followees.empty?
  json.followeeIds([])
else
  json.followeeIds do
    json.array! user.followees.map(&:id)
  end
end
