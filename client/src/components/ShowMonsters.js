import React, { useState, useEffect } from 'react';
import MonsterCharacterCard from './MonsterCharacterCard';

function ShowMonsters({ userMonsters }) {
  const [myMonsters, setMyMonsters] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/monsters/${userMonsters}`)
      .then(res => res.json())
      .then(data => setMyMonsters(data))
  },[])

  const handleMonsterDelete = (id) => {
    setMyMonsters(myMonsters.filter(monster => monster.id !== id));
  };
  console.log(myMonsters)
  const viewMonsters = () => {
    return myMonsters.map(monster => (
      <MonsterCharacterCard
        key={monster.id}
        monster_id={monster.id}
        url={monster.look.image}
        level={monster.level}
        monsterName={monster.monster_name}
        HP={monster.hit_points}
        MP={monster.magic}
        attack={monster.attack}
        armor_defense={monster.armor.defense}
        armor_base={monster.base_armor}
        armor_image={monster.armor.image}
        weapon_image={monster.weapon.image}
        weapon_attack={monster.weapon.attack}
        movement={monster.movement}
        bio={monster.bio}
        augmnet={monster.augmnet}
        handleMonsterDelete={handleMonsterDelete}
        user_id={monster.user_id}
      />
    ))
  };

  return (
    <>
      <div className='characterCardContainer'>{viewMonsters()}</div>
    </>
  );
}

export default ShowMonsters;