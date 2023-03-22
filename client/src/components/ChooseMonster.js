import React, { useState, useEffect } from 'react';
import MonsterImageCard from './MonsterImageCard.js'
import { useNavigate } from 'react-router-dom';

function ChooseMonster({user, setMonsterState, monsterState, monsters}) {

  const [filterName, setFilterName] = useState('');
  const [selectedMonster, setSelectedMonster] = useState('');

  //allow navigation
  const navigate = useNavigate();

  const handleAvatarClicked = (lookID) => {
    setMonsterState(prevState => ({ ...prevState, look_id: lookID}));
    setSelectedMonster(prevState => ({ ...prevState, look_id: lookID}));
    navigate('/create/monster')
  }

  const viewMonsters = () => {
    return monsters.filter(monster => monster.race.includes(filterName)).map(monster => (
      <MonsterImageCard
        key={monster.id}
        url={monster.image}
        id={monster.id}
        race={monster.race}
        onClick={() => handleAvatarClicked(monster.id)}
      />
    ))
  };

  return (
    <>
      <div className='createForm'>Create Monsters</div>
      <form className='createForm'>
        <label>
          Creature Name:
          <input type="text" value={monsterState.monster_name} onChange={(e) => setMonsterState(prevState => ({ ...prevState, monster_name: e.target.value }))} />
        </label>
        <br></br>
      </form>
      <label className='createForm'>
        Filter by Name:
        <input type="text" value={filterName} onChange={(e) => setFilterName(e.target.value)} />
      </label>
      <div>Select Avatar</div>
      <div className='looks'>
        
        {viewMonsters()}
      </div>
    </>
  );
}

export default ChooseMonster;