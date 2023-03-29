class Monster < ApplicationRecord
  belongs_to :user
  belongs_to :look
  belongs_to :armor
  belongs_to :weapon
  has_many :join_games, dependent: :destroy

  validates :monster_name, presence: { message: "Please enter a name for your scary monster" }, length: { maximum: 15, too_long: "The monster's name must be less than 16 characters long." }
  validate :check_for_offensive_words
  validates :movement, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 100, message: "The monster's movement cannot be more than 100." }
  validates :level, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 100, message: "The monster's level cannot be more than 100." }
  validates :hit_points, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 100, message: "The monster's hit points cannot be more than 100." }
  validates :base_armor, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 100, message: "The monster's base armor cannot be more than 100." }
  validates :attack, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 100, message: "The monster's attack rating cannot be more than 100." }
  validates :magic, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 100, message: "The monster's magic points cannot be more than 100." }
  validates :bio, length: { maximum: 130, too_long: "The bio can not be longer than 130 characters. You tried to use %{count} characters." }

  def check_for_offensive_words
    if Obscenity.profane?(monster_name)
      errors.add(:monster_name, "cannot contain offensive words")
    end
  
    if Obscenity.profane?(bio)
      errors.add(:bio, "cannot contain offensive words")
    end
  end

end
