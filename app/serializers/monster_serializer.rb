class MonsterSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :monster_name, :level, :hit_points, :armor, :weapon, :attack, :magic, :movement, :bio, :look, :base_armor
end
