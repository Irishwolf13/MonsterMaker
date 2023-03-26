import React, { useState, useEffect} from 'react';
import MonsterImageCard2 from './MonsterImageCard2.js'
import { useNavigate, useParams } from 'react-router-dom';
import ArmorDrop from './ArmorDrop';
import WeaponDrop from './WeaponDrop';
import AugmentDrop from './AugmentDrop';

function CreateMonster({monsters, monsterState}) {
  //allow navigation
  const navigate = useNavigate();
  const [myMonsterState, setMyMonsterState] = useState({})
  const [armorBoard, setArmorBoard] = useState([])
  const [weaponBoard, setWeaponBoard] = useState([])
  // const [augmentBoard, setAugmentBoard] = useState([])
  const [armorList, setArmorList] = useState([])
  const [weaponList, setWeaponList] = useState([])
  // const [augmentList, setAugmentList] = useState([])

  useEffect(() => {
    setMyMonsterState({
      monster_name: 'Frank',
      user_id: monsterState.user_id,
      look_id: monsterState.look_id,
      armor_id: 1,
      weapon_id: 1,
      level: 1,
      hit_points: 1,
      base_armor: 1,
      attack: 1,
      magic: 1,
      movement: 1,
      bio: ''
    })
    fetch('http://localhost:3000/armors')
    .then(response => response.json())
    .then(data => setArmorList(data));
    fetch('http://localhost:3000/weapons')
    .then(response => response.json())
    .then(data => setWeaponList(data));
    // fetch('http://localhost:3000/augments')
    // .then(response => response.json())
    // .then(data => setAugmentList(data));
  },[])

  const saveMonster = () => {
    fetch('http://localhost:3000/monsters',{
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(myMonsterState)
    })
    .then(res => {
      if (res.ok) {
        alert('Monster Saved!');
      } else {
        res.json().then(data => {
          let messages = Object.values(data.errors).flat();
          alert(`Validation failed: ${messages.join(', ')}`);
        });
      }
    })
    .catch(error => alert(`Error: ${error.message}`))
  }

  const viewMonster = () => {
    return monsters.filter(monster => monster.id === myMonsterState.look_id).map(monster => (
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
    setArmorBoard([armorList[0]])
    setWeaponBoard([weaponList[0]])
    // navigate('/choose/monster')
  }
  const handleReselectAvatar = () => {
    navigate('/choose/monster')
  }
  const myRest = () => {
    setMyMonsterState(prevState => ({ ...prevState,
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
          <input type="text" value={myMonsterState.monster_name} onChange={(e) => setMyMonsterState(prevState => ({ ...prevState, monster_name: e.target.value }))} />
        </div>
        <div>
          <label htmlFor="input1">Level: </label>
          <input type="number" id="input1" name="level" value={myMonsterState.level} onChange={(e) => setMyMonsterState(prevState => ({ ...prevState, level: parseInt(e.target.value) }))} />
        </div>
        <div>
          <label htmlFor="input2">Hit Points: </label>
          <input type="number" id="input2" name="hit_points" value={myMonsterState.hit_points} onChange={(e) => setMyMonsterState(prevState => ({ ...prevState, hit_points: parseInt(e.target.value) }))} />
        </div>
        <div>
          <label htmlFor="input3">Base Armor: </label>
          <input type="number" id="input3" name="base_armor" value={myMonsterState.base_armor} onChange={(e) => setMyMonsterState(prevState => ({ ...prevState, base_armor: parseInt(e.target.value) }))} />
        </div>
        <div>
          <label htmlFor="input4">Attack Rating: </label>
          <input type="number" id="input4" name="attack" value={myMonsterState.attack} onChange={(e) => setMyMonsterState(prevState => ({ ...prevState, attack: parseInt(e.target.value) }))} />
        </div>
        <div>
          <label htmlFor="input5">Magic Points: </label>
          <input type="number" id="input5" name="magic" value={myMonsterState.magic} onChange={(e) => setMyMonsterState(prevState => ({ ...prevState, magic: parseInt(e.target.value) }))} />
        </div>
        <div>
          <label htmlFor="input5">Movement Speed: </label>
          <input type="number" id="input5" name="movement" value={myMonsterState.movement} onChange={(e) => setMyMonsterState(prevState => ({ ...prevState, movement: parseInt(e.target.value) }))} />
        </div>
        <div className='bioBox'>
          <label htmlFor="bio">Bio: </label>
          <textarea id="bio" name="bio" className='textBox' value={myMonsterState.bio} onChange={(e) => setMyMonsterState(prevState => ({ ...prevState, bio: e.target.value }))} />
        </div>
      </form>
    </div>
    <ArmorDrop 
      setMyMonsterState={setMyMonsterState}
      setMyBoard={setArmorBoard}
      myBoard={armorBoard}
      myMonster={myMonsterState}
      armorList={armorList}
    />
    <WeaponDrop
      setMyMonsterState={setMyMonsterState}
      setMyBoard={setWeaponBoard}
      myBoard={weaponBoard}
      myMonster={myMonsterState}
      weaponList={weaponList}
    />
        {/* <AugmentDrop
      setMyMonsterState={setMyMonsterState}
      setMyBoard={setAugmentBoard}
      myBoard={augmentBoard}
      myMonster={myMonsterState}
      augmentList={augmentList}
    /> */}
    <div>
      {viewMonster()}
    </div>
  </>
  )
}

export default CreateMonster;