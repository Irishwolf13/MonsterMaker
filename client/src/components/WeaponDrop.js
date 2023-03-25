import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd'
import Weapon from './Weapons';

function WeaponDrop({ setMyMonsterState, myMonster, weaponList, setMyBoard, myBoard }){

  const [myList, setMyList] = useState([])
  const [showWeapons, setShowWeapons] = useState(false);

  const [{ isOver: isOverBoard }, dropBoard] = useDrop(() => (
    {
      accept: 'sword',
      drop: (item) => {
        addImageToBoard(item.id, 'weapon_id')
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }
  ))

  useEffect(() => {
    if(weaponList.length > 0) {
      if(myMonster.weapon_id !== undefined){
        setMyBoard([weaponList[myMonster.weapon_id-1]])
      }
    }
  },[weaponList])

  const handleItemsClick = () => {
    setShowWeapons(!showWeapons)
  }

  // Adding images to boards
  const addImageToBoard = (item) => {
    setMyMonsterState(prevState => ({ ...prevState, weapon_id: item }));
    fetch(`${'http://localhost:3000/weapons'}/${item}`)
    .then(response => response.json())
    .then(data => setMyBoard([data]));
    setShowWeapons(false)
  }

  // Items
  const thingsToShow = weaponList.map(item => {
    return <Weapon key={ item.id } id={ item.id } url={ item.image } myButtonClicked={() => {addImageToBoard(item.id, 'weapon_id')}}/>
  })

  const myItemBoard = myBoard.map((item) => {
    return (
      <div className='currentItem' key={item.id}>
        <Weapon id={item.id} url={item.image} myButtonClicked={handleItemsClick} />
      </div>
    );
  });

  return (
    <>
      <div className={`${'BoardWeapon'} Board`} ref={dropBoard}>
        <img className={'armorFrame'} src={'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/frames/square2.png'}/>
        {myItemBoard}
      </div>
      <div>
        {showWeapons && (
          <div className='picturesContainer' title='Drag and Drop Items'>
            <div className='dropDownPictures'>{thingsToShow}</div>
          </div>
        )}
      </div>
    </>
  )
}

export default WeaponDrop