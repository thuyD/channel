json.extract! user, :id, :username, :bio, :name
json.image_url asset_path(user.avatar.url(:thumb))
