import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MonsterCharacterCard from './MonsterCharacterCard';

function ShowMonsters({ user, monsterState }) {
  //allow navigation
  const navigate = useNavigate();
  const [myMonster, setMyMonster] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/monsters/${monsterState.user_id}`)
      .then(response => response.json())
      .then(data => setMyMonster(data));
  },[])


  const handleMonsterDelete = (id) => {
    setMyMonster(myMonster.filter(monster => monster.id !== id));
  };

  const viewMonsters = () => {
    return myMonster.map(monster => (
      <MonsterCharacterCard
        key={monster.id}
        id={monster.id}
        url={monster.look.image}
        level={monster.level}
        monsterName={monster.monster_name}
        HP={monster.hit_points}
        MP={monster.magic}
        attack={monster.attack}
        armor_type={monster.armor.material}
        armor_image={monster.armor.image}
        weapon_image={monster.weapon.image}
        movement={monster.movement}
        bio={monster.bio}
        handleMonsterDelete={handleMonsterDelete}
      />
    ))
  };

// console.log(monsterState)
  return (
    <>
      <div>Show Monsters</div>
      <div className='characterCardContainer'>{viewMonsters()}</div>
    </>
  );
}

export default ShowMonsters;