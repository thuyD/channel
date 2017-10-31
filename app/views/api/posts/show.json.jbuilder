json.post do
  json.partial! 'api/posts/post', post: @post
end

if @post.comments.empty?
  json.comments({})
else
  json.comments do
    @post.comments.each do |comment|
      json.set! comment.id do
        json.partial! 'api/comments/comment', comment: comment
      end
    end
  end
end
