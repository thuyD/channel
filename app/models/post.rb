class Post < ApplicationRecord
  validates :title, :body, :author_id, presence: true

  has_attached_file :image, default_url: "mondaylisa.jpg", styles: { medium: "230x258#"}
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

  has_many :comments,
    class_name: :Comment,
    foreign_key: :post_id,
    primary_key: :id

  has_many :likes,
    class_name: :Like,
    foreign_key: :post_id,
    primary_key: :id
end
