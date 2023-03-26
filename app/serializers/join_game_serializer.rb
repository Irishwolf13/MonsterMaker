class JoinGameSerializer < ActiveModel::Serializer
  attributes :id, :game, :monster_count, :monster

end
