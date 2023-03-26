class Monster < ApplicationRecord
  belongs_to :user
  belongs_to :look
  belongs_to :armor
  belongs_to :weapon
  has_many :join_games, dependent: :destroy

  validates :monster_name, presence: { message: "A Scary monster must have a name" }
  validates :movement, presence: { message: "A scary monster must have movement" }
  validates :level, numericality: { only_integer: true, greater_than_or_equal_to: 1 }
end
