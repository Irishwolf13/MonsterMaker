class Game < ApplicationRecord
  belongs_to :user
  has_many :join_games, dependent: :destroy
  has_many :monsters
end
