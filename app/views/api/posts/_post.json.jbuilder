json.extract! post, :title, :body, :author_id, :created_at, :id
json.image_url_m asset_path(post.image.url(:medium))
json.image_url_reg asset_path(post.image.url)

json.author_name post.author.name
json.author_id post.author.id
json.author_bio post.author.bio
json.author_image_t asset_path(post.author.avatar.url(:thumb))
json.author_image_s asset_path(post.author.avatar.url(:small))
