class JoinGame < ApplicationRecord
  belongs_to :game
  belongs_to :monster
end