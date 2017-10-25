class Post < ApplicationRecord
  validates :title, :body, :author_id, presence: true

  belongs_to :author,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :author_id

end
