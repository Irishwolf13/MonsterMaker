class User < ApplicationRecord
  has_secure_password
  has_many :monsters
  has_many :games
end
