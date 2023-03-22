import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd'
import Picture from './Picture';
import Weapons from './Weapons';
import MonsterImageCard2 from './MonsterImageCard2.js'
import { useNavigate } from 'react-router-dom';

function CreateMonster({user, setMonsterState, monsterState, monsters,setArmorBoard,setWeaponBoard,armorBoard,weaponBoard}) {
  //allow navigation
  const navigate = useNavigate();
  
  //States
  const [deletedItems, setDeletedItems] = useState([])
  const [armorList, setArmorList] = useState([])
  const [weaponList, setWeaponList] = useState([])
  const [showArmors, setShowArmors] = useState(false);
  const [showWeapons, setShowWeapons] = useState(false);

  const [{ isOver: isOverBoard }, dropBoard] = useDrop(() => (
    {
      accept: "image",
      drop: (item) => {
        addImageToBoard(item.id)
        setShowArmors(false)
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }
  ))
  const [{ isOver: isOverWeaponBoard }, dropWeaponBoard] = useDrop(() => (
    {
      accept: "sword",
      drop: (item) => {
        addWeaponToBoard(item.id);
        setShowWeapons(false)
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }
  ))

  useEffect(() => {
    fetch('http://localhost:3000/armors')
      .then(response => response.json())
      .then(data => setArmorList(data));
    fetch('http://localhost:3000/weapons')
    .then(response => response.json())
    .then(data => setWeaponList(data))
  },[])

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

  // Pretty sure I'll be able to refactor these into one function
  const handleArmorsClick = () => {
    setShowArmors(!showArmors)
    if(showWeapons == true) {
      setShowWeapons(!showWeapons)
    }
  }
  const handleWeaponsClick = () => {
    setShowWeapons(!showWeapons)
    if(showArmors == true) {
      setShowArmors(!showArmors)
    }
  }
console.log(showWeapons)
  return (
    <>
    <div>
      <form className='createForm'>
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

    <div>
      {viewMonsters()}
      <div className='Board1' ref={dropBoard}>
        {myArmorBoard}
        <p>Armor</p>
        </div>
        {/* <div className={weaponBoard.length>0 ? checkAugments() : 'Board2'} ref={dropWeaponBoard}></div> */}
      <div className='Board2' ref={dropWeaponBoard}>
        {myWeaponBoard}
        <p>Weapon</p>
        </div>
    </div>
    <div>
      <button onClick={handleArmorsClick}>Armors</button>
      {showArmors && (
        <div className='picturesContainer'>
          <div className='dropDownPictures'>{myArmors}</div>
        </div>
      )}
    </div>
    <div>
      <button onClick={handleWeaponsClick}>Weapons</button>
      {showWeapons && (
        <div className='picturesContainer'>
          <div className='dropDownPictures'>{myWeapons}</div>
        </div>
      )}
    </div>
    <button onClick={handleReselectAvatar}>Reselect Avatar</button>
    <button onClick={handleReset}> Rest Attributes </button>
    <button onClick={saveMonster}> Save Monster </button>
  </>
  )
}

export default CreateMonster;