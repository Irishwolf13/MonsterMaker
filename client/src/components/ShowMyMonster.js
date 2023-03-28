import React, { useState, useEffect} from 'react';
import MonsterImageCard2 from './MonsterImageCard2.js'
import { useNavigate, useParams } from 'react-router-dom';
import ArmorDrop from './ArmorDrop';
import WeaponDrop from './WeaponDrop';

function ShowMyMonster({monsters}) {
  //allow navigation
  const navigate = useNavigate();
  const [myMonsterState, setMyMonsterState] = useState({})
  const [armorBoard, setArmorBoard] = useState([])
  const [weaponBoard, setWeaponBoard] = useState([])
  const [armorList, setArmorList] = useState([])
  const [weaponList, setWeaponList] = useState([])

  //################################# GRABS ONE MONSTER ##############################
  let { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:3000/monster/${id}`)
    .then(response => response.json())
    .then(data => setMyMonsterState({
        monster_name: data.monster_name,
        look_id: data.look.id,
        user_id : data.user_id,
        armor_id: data.armor.id,
        weapon_id: data.weapon.id,
        level: data.level,
        hit_points: data.hit_points,
        base_armor: data.base_armor,
        attack: data.attack,
        magic: data.magic,
        movement: data.movement,
        bio: data.bio
    }))
    fetch('http://localhost:3000/armors')
    .then(response => response.json())
    .then(data => setArmorList(data));
    fetch('http://localhost:3000/weapons')
    .then(response => response.json())
    .then(data => setWeaponList(data));
  },[])

  const updateMonster = () => {
    console.log(myMonsterState)
    fetch(`http://localhost:3000/monsters/${id}`,{
      method: 'PATCH',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(myMonsterState)
    })
    .then(res => res.json())
    .then(alert('Monster Updated!'))
    .then(handleReset())
    .then(navigate('/show/monsters'))
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
    setArmorBoard([])
    setWeaponBoard([])
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
        <button className='updateButton newbutton' onClick={updateMonster}> Update Monster </button>
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
    <div>
      {viewMonster()}
    </div>
  </>
  )
}

export default ShowMyMonster;