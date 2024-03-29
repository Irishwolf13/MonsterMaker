import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd'
import Weapon from './Weapons';

function WeaponDrop({ setMyMonsterState, myMonster, weaponList, setMyBoard, myBoard }){

  const [myList, setMyList] = useState([])
  const [showWeapons, setShowWeapons] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

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
  const itemsPerPage = 8;
  const numberOfPages = Math.ceil(weaponList.length / itemsPerPage);
  const currentPageItems = weaponList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const thingsToShow = currentPageItems.map(item => {
    return <Weapon
      key={ item.id }
      id={ item.id }
      url={ item.image }
      attack={ item.attack }
      style={ item.style }
      myButtonClicked={() => {addImageToBoard(item.id, 'weapon_id')}}
    />
  })

    const pageButtons = Array.from(Array(numberOfPages), (e, i) => {
    return (
      <button className='newbutton bottom' key={i} onClick={() => setCurrentPage(i+1)}>{i+1}</button>
    );
  });

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
            <div className='dropDownPictures'>
              <div>{thingsToShow}</div>
              <div className='pageButtons'>{pageButtons}</div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default WeaponDrop