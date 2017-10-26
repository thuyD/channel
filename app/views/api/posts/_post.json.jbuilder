json.extract! post, :title, :body, :author_id
json.image_url asset_path(post.image.url)
