json.extract! user, :id, :username, :bio, :name
json.image_url_t asset_path(user.avatar.url(:thumb))
json.image_url_m asset_path(user.avatar.url(:medium))
