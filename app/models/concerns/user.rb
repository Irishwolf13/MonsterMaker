class User < ApplicationRecord
  has_secure_password
  has_many :monsters
  has_many :games

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
end
