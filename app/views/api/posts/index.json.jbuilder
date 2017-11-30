json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! "api/posts/post", post: post
    end
  end
end

if @post_ids
  json.feed_post_ids @post_ids
else
  json.feed_post_ids([])
end

if @current_user_id
  json.current_user_id @current_user_id
else
  json.current_user_id(false)
end
