import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd'
import Armor from './Armors';

function ArmorDrop({ setMyMonsterState, myMonster, armorList, setMyBoard, myBoard }){

  const [myList, setMyList] = useState([])
  const [showArmors, setShowArmors] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [{ isOver: isOverBoard }, dropBoard] = useDrop(() => (
    {
      accept: 'image',
      drop: (item) => {
        addImageToBoard(item.id, 'armor_id')
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }
  ))

  useEffect(() => {
    if(armorList.length > 0) {
      if(myMonster.armor_id !== undefined){
        setMyBoard([armorList[myMonster.armor_id-1]])
      }
    }
  },[armorList])

  const handleItemsClick = () => {
    setShowArmors(!showArmors)
  }

  // Adding images to boards
  const addImageToBoard = (item) => {
    setMyMonsterState(prevState => ({ ...prevState, armor_id: item }));
    fetch(`${'http://localhost:3000/armors'}/${item}`)
    .then(response => response.json())
    .then(data => setMyBoard([data]));
    setShowArmors(false)
  }

  // Items
  const itemsPerPage = 8;
  const numberOfPages = Math.ceil(armorList.length / itemsPerPage);
  const currentPageItems = armorList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const thingsToShow = currentPageItems.map(item => {
    console.log(item)
    return <Armor
              key={ item.id }
              id={ item.id }
              url={ item.image }
              myButtonClicked={() => {addImageToBoard(item.id, 'armor_id')}}
              defense={item.defense}
              material={item.material}
              weight={item.weight}
            />
  })

  const pageButtons = Array.from(Array(numberOfPages), (e, i) => {
    return (
      <button  className='newbutton' key={i} onClick={() => setCurrentPage(i+1)}>{i+1}</button>
    );
  });

  const myItemBoard = myBoard.map((item) => {
    return (
      <div className='currentItem' key={item.id}>
        <Armor id={item.id} url={item.image} myButtonClicked={handleItemsClick} />
      </div>
    );
  });

  return (
    <>
      <div className={`${'BoardArmor'} Board`} ref={dropBoard}>
        <img className={'armorFrame'} src={'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/frames/square2.png'}/>
        {myItemBoard}
      </div>
      <div>
        {showArmors && (
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

export default ArmorDrop