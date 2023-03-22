import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd'
import Picture from './Picture';
import Weapons from './Weapons';
import MonsterImageCard2 from './MonsterImageCard2.js'
import { useNavigate, useParams } from 'react-router-dom';

function ShowMyMonster({user, setMonsterState, monsterState, monsters,setArmorBoard,setWeaponBoard,armorBoard,weaponBoard}) {
  //allow navigation
  const navigate = useNavigate();

  const [deletedItems, setDeletedItems] = useState([])
  const [armorList, setArmorList] = useState([])
  const [weaponList, setWeaponList] = useState([])
  let { id } = useParams()

  const [{ isOver: isOverBoard }, dropBoard] = useDrop(() => (
    {
      accept: "image",
      drop: (item) => addImageToBoard(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }
  ))
  const [{ isOver: isOverWeaponBoard }, dropWeaponBoard] = useDrop(() => (
    {
      accept: "sword",
      drop: (item) => addWeaponToBoard(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }
  ))

  //################################# GRABS ONE MONSTER ##############################
  useEffect(() => {
    fetch(`http://localhost:3000/monster/${id}`)
      .then(response => response.json())
      .then(data => {
        addImageToBoard([data.armor.id])
        addWeaponToBoard([data.weapon.id])
        setMonsterState(prevState => ({ ...prevState,
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
      })
    fetch('http://localhost:3000/armors')
      .then(response => response.json())
      .then(data => setArmorList(data));
    fetch('http://localhost:3000/weapons')
    .then(response => response.json())
    .then(data => setWeaponList(data))
  },[])

  const updateMonster = () => {
    fetch(`http://localhost:3000/monsters/${id}`,{
      method: 'PATCH',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(monsterState)
    })
    .then(res => res.json())
    .then(alert('Monster Updated!'))
    .then(handleReset())
    //####################### NEED TO NAVIGATE TO ALL MY MONSTERS PAGE ########################
  }

  // Adding images to boards
  const addImageToBoard = (item) => {
    setMonsterState(prevState => ({ ...prevState, armor_id: item }));
    fetch(`http://localhost:3000/armors/${item}`)
    .then(response => response.json())
    .then(data => setArmorBoard([data]));
  }

  // Adding images to boards
  const addWeaponToBoard = (item) => {
    setMonsterState(prevState => ({ ...prevState, weapon_id: item }));
    fetch(`http://localhost:3000/weapons/${item}`)
    .then(response => response.json())
    .then(data => setWeaponBoard([data]));
  }
  // Armors
  const myArmors = armorList.map(armor => {
    return <Picture key={ armor.id } id={ armor.id } url={ armor.image }/>
  })

  // Weapons
  const myWeapons = weaponList.map(weapon => {
    return <Weapons key={ weapon.id } id={ weapon.id } url={ weapon.image }/>
  })

  const removeArmor = (id) => {
    const filteredPictures = armorBoard.filter((armor) => id == armor.id)
    const newArmorBoard = armorBoard.filter((armor) => id !== armor.id)
    setDeletedItems([...deletedItems, filteredPictures[0]])
    setArmorBoard(newArmorBoard)
    setMonsterState(prevState => ({ ...prevState, armor_id: 1 }));
  }
  const removeWeapon = (id) => {
    const myWeapons = weaponBoard.filter((weapon) => id == weapon.id)
    const newWeaponBoard = weaponBoard.filter((weapon) => id !== weapon.id)
    setDeletedItems([...deletedItems, myWeapons[0]])
    setWeaponBoard(newWeaponBoard)
    setMonsterState(prevState => ({ ...prevState, weapon_id: 1 }));
  }

  const myArmorBoard = armorBoard.map((armor) => {
    return (
      <div key={armor.id}>
        <Picture id={armor.id} url={armor.image}  />
        <button onClick={() => removeArmor(armor.id)}> Remove </button>
      </div>
    );
  });

  const myWeaponBoard = weaponBoard.map((weapon) => {
    return (
      <div key={weapon.id}>
        <Weapons id={weapon.id} url={weapon.image} />
        <button onClick={() => removeWeapon(weapon.id)}> Remove </button>
      </div>
    );
  });

  const viewMonsters = () => {
    return monsters.filter(monster => monster.id === monsterState.look_id).map(monster => (
      <MonsterImageCard2
        key={monster.id}
        url={monster.image}
        handleReselectAvatar={doNothing}
      />
    ))
  };

  const checkAugments = () => {
    //Going to check for augments, and then change boarder accordingly to Blue, Red, or Yellow
    return 'fullBoard'
  }
 const doNothing = () => {

 }
  const handleReset = () => {
    myRest()
    setArmorBoard([])
    setWeaponBoard([])
    navigate('/show/monsters')
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
  return (
    <>
    <div>
      <div>Current Monster ID = {id}</div>
      <form>
        <label htmlFor="input0">Creature Name:</label>
        <input type="text" value={monsterState.monster_name} onChange={(e) => setMonsterState(prevState => ({ ...prevState, monster_name: e.target.value }))} />
        <br></br>
        <label htmlFor="input1">Level: </label>
        <input type="number" id="input1" name="level" value={monsterState.level} onChange={(e) => setMonsterState(prevState => ({ ...prevState, level: parseInt(e.target.value) }))} />
        <br></br>
        <label htmlFor="input2">Hit Points: </label>
        <input type="number" id="input2" name="hit_points" value={monsterState.hit_points} onChange={(e) => setMonsterState(prevState => ({ ...prevState, hit_points: parseInt(e.target.value) }))} />
        <br></br>
        <label htmlFor="input3">Base Armor: </label>
        <input type="number" id="input3" name="base_armor" value={monsterState.base_armor} onChange={(e) => setMonsterState(prevState => ({ ...prevState, base_armor: parseInt(e.target.value) }))} />
        <br></br>
        <label htmlFor="input4">Attack Rating: </label>
        <input type="number" id="input4" name="attack" value={monsterState.attack} onChange={(e) => setMonsterState(prevState => ({ ...prevState, attack: parseInt(e.target.value) }))} />
        <br></br>
        <label htmlFor="input5">Magic Points: </label>
        <input type="number" id="input5" name="magic" value={monsterState.magic} onChange={(e) => setMonsterState(prevState => ({ ...prevState, magic: parseInt(e.target.value) }))} />
        <br></br>
        <label htmlFor="input5">Movement Speed: </label>
        <input type="number" id="input5" name="movement" value={monsterState.movement} onChange={(e) => setMonsterState(prevState => ({ ...prevState, movement: parseInt(e.target.value) }))} />
        <br></br>
      </form>
    </div>
    <div>
      <form>
        <label htmlFor="bio">Bio</label><br></br>
        <textarea id="bio" name="bio" className='textBox' value={monsterState.bio} onChange={(e) => setMonsterState(prevState => ({ ...prevState, bio: e.target.value }))} />
      </form>
    </div>
    <div>
      {viewMonsters()}
      Armor
      <div className={armorBoard.length>0 ? checkAugments() : 'Board'} ref={dropBoard}>{myArmorBoard}</div>
      <div className={weaponBoard.length>0 ? checkAugments() : 'Board'} ref={dropWeaponBoard}>{myWeaponBoard}</div>
      Weapon
    </div>
    <div>
      <div className='Pictures'>{myArmors}</div>
      Armors
    </div>
    <div>
      <div className='Pictures'>{myWeapons}</div>
      Weapons
    </div>
    {/* <button onClick={handleReselectAvatar}>Reselect Avatar</button>
    <button onClick={handleReset}> Rest Attributes </button> */}
    <button onClick={updateMonster}> Update Monster </button>
  </>
  )
}

export default ShowMyMonster;