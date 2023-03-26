class Game < ApplicationRecord
  belongs_to :user
  has_many :join_games
  has_many :monsters
end
