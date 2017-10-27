json.extract! post, :title, :body, :author_id
json.image_url asset_path(post.image.url(:medium))
json.author_name post.author.name
json.author_id post.author.id
json.author_image asset_path(post.author.avatar.url(:thumb))
