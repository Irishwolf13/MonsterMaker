class User < ApplicationRecord
  has_secure_password
  has_many :monsters
  has_many :games

  validates :username, uniqueness: { message: "%{value} is already in use." }
  validates :email, presence: true,
  uniqueness: { message: "%{value} has already been taken" },
  format: { with: URI::MailTo::EMAIL_REGEXP, message: "must be a valid email address" }
end