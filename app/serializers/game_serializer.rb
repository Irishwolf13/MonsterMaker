class GameSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :difficulty, :join_games

    def join_games
    object.join_games.map do |item|
      {
        join_id: item.id,
        game_id: item.game_id,
        monsterCount: item.monster_count,
        gameMonster: item.monster,
        look: item.monster.look,
        armor: item.monster.armor.defense,
        weapon: item.monster.weapon.attack
      }
    end
  end
end
