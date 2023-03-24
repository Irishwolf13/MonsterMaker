import React, { useState, useEffect } from 'react';
import MonsterImageCard2 from './MonsterImageCard2.js'
import { useNavigate } from 'react-router-dom';
import DragDrop from './DragDrop';

function CreateMonster({user, setMonsterState, monsterState, monsters,setArmorBoard,setWeaponBoard,armorBoard,weaponBoard}) {
  //allow navigation
  const navigate = useNavigate();

  const saveMonster = () => {
    fetch('http://localhost:3000/monsters',{
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(monsterState)
    })
    .then(res => {
      if (res.ok) {
        alert('Monster Saved!');
      }
      return res.json();
    })
    // .then(data => {console.log(data);})
    .catch(error => alert(`Error: ${error.message}`))
  }

  const viewMonsters = () => {
    return monsters.filter(monster => monster.id === monsterState.look_id).map(monster => (
      <MonsterImageCard2
        key={monster.id}
        url={monster.image}
        handleReselectAvatar={handleReselectAvatar}
      />
    ))
  };

  const checkAugments = () => {
    //Going to check for augments, and then change boarder accordingly to Blue, Red, or Yellow
    return 'fullBoard'
  }

  const handleReset = () => {
    myRest()
    setArmorBoard([])
    setWeaponBoard([])
    // navigate('/choose/monster')
  }
  const handleReselectAvatar = () => {
    navigate('/choose/monster')
  }
  const myRest = () => {
    setMonsterState(prevState => ({ ...prevState, 
      monster_name: 'Frank',
      armor_id: 1,
      weapon_id: 1,
      level: 1,
      hit_points: 1,
      base_armor: 1,
      attack: 1,
      magic: 1,
      movement: 1,
      bio: ''
    }))
  }

// console.log(showWeapons)
  return (
    <>
    <div>
      <button onClick={handleReselectAvatar}>Reselect Avatar</button>
      <button onClick={handleReset}> Rest Attributes </button>
      <button className='saveButton' onClick={saveMonster}> Save Monster </button>
      <form className='createForm'>
        <img className='createFormFrame' src={'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/frames/rectangle1.png'}/>
        <div>
          <label htmlFor="input0">Creature Name:</label>
          <input type="text" value={monsterState.monster_name} onChange={(e) => setMonsterState(prevState => ({ ...prevState, monster_name: e.target.value }))} />
        </div>
        <div>
          <label htmlFor="input1">Level: </label>
          <input type="number" id="input1" name="level" value={monsterState.level} onChange={(e) => setMonsterState(prevState => ({ ...prevState, level: parseInt(e.target.value) }))} />
        </div>
        <div>
          <label htmlFor="input2">Hit Points: </label>
          <input type="number" id="input2" name="hit_points" value={monsterState.hit_points} onChange={(e) => setMonsterState(prevState => ({ ...prevState, hit_points: parseInt(e.target.value) }))} />
        </div>
        <div>
          <label htmlFor="input3">Base Armor: </label>
          <input type="number" id="input3" name="base_armor" value={monsterState.base_armor} onChange={(e) => setMonsterState(prevState => ({ ...prevState, base_armor: parseInt(e.target.value) }))} />
        </div>
        <div>
          <label htmlFor="input4">Attack Rating: </label>
          <input type="number" id="input4" name="attack" value={monsterState.attack} onChange={(e) => setMonsterState(prevState => ({ ...prevState, attack: parseInt(e.target.value) }))} />
        </div>
        <div>
          <label htmlFor="input5">Magic Points: </label>
          <input type="number" id="input5" name="magic" value={monsterState.magic} onChange={(e) => setMonsterState(prevState => ({ ...prevState, magic: parseInt(e.target.value) }))} />
        </div>
        <div>
          <label htmlFor="input5">Movement Speed: </label>
          <input type="number" id="input5" name="movement" value={monsterState.movement} onChange={(e) => setMonsterState(prevState => ({ ...prevState, movement: parseInt(e.target.value) }))} />
        </div>
        <div className='bioBox'>
          <label htmlFor="bio">Bio: </label>
          <textarea id="bio" name="bio" className='textBox' value={monsterState.bio} onChange={(e) => setMonsterState(prevState => ({ ...prevState, bio: e.target.value }))} />
        </div>
      </form>
    </div>
    <DragDrop 
      setMonsterState={setMonsterState}
      setMyBoard={setArmorBoard}
      myBoard={armorBoard}
      fetchURL={'http://localhost:3000/armors'}
      boardNumber={'Board1'}
      imageClassName={'armorFrame'}
      buttonClassName={'armorsButton'}
      buttonText={'Armors'}
      myAccpets={'image'}
      item_id={'armor_id'}
      drop_type={'image'}
    />
        <DragDrop 
      setMonsterState={setMonsterState}
      setMyBoard={setWeaponBoard}
      myBoard={weaponBoard}
      fetchURL={'http://localhost:3000/weapons'}
      boardNumber={'Board2'}
      imageClassName={'armorFrame'}
      buttonClassName={'weaponsButton'}
      buttonText={'Weapons'}
      myAccpets={'sword'}
      item_id={'weapon_id'}
      drop_type={'sword'}
    />
    <div>
      {viewMonsters()}
    </div>
  </>
  )
}

export default CreateMonster;