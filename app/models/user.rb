class User < ApplicationRecord
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :avatar,
  default_url: "default_user.png",
  styles: { thumb: "32x32#", medium: "60x60#", large: "100x100#"}
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  after_initialize :ensure_session_token

  #associations here
  has_many :posts,
    class_name: :Post,
    foreign_key: :author_id,
    primary_key: :id

  has_many :comments,
    class_name: :Comment,
    foreign_key: :author_id,
    primary_key: :id

  has_many :likes,
    class_name: :Like,
    foreign_key: :user_id,
    primary_key: :id

#find all follow record where we are the followee
  has_many :in_follows,
    foreign_key: :followee_id,
    class_name: :Follow

#find all follow record where we are the followers
  has_many :out_follows,
    foreign_key: :follower_id,
    class_name: :Follow

#give users objects of all of the followers that follow us
  has_many :followers,
    through: :in_follows,
    source: :follower

#give users objects of all of the followees that we follow
  has_many :followees,
    through: :out_follows,
    source: :followee

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!

    self.session_token
  end

  attr_reader :password
end
