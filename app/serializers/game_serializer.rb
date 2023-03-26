class GameSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :difficulty, :join_games

    def join_games
    object.join_games.map do |item|
      {
        game_id: item.game_id,
        monsterCount: item.monster_count,
        gameMonster: item.monster,
        look: item.monster.look
      }
    end
  end
end
