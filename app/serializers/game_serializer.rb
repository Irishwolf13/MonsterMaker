class GameSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :difficulty, :join_games
end
