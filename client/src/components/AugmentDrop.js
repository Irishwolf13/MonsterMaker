import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd'
import Augment from './Augments';

function AugmentDrop({ setMyMonsterState, myMonster, AugmentList, setMyBoard, myBoard }){

  const [myList, setMyList] = useState([])
  const [showAugments, setShowAugments] = useState(false);

  const [{ isOver: isOverBoard }, dropBoard] = useDrop(() => (
    {
      accept: 'image',
      drop: (item) => {
        addImageToBoard(item.id, 'Augment_id')
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }
  ))

  useEffect(() => {
    if(AugmentList.length > 0) {
      if(myMonster.Augment_id !== undefined){
        setMyBoard([AugmentList[myMonster.Augment_id-1]])
      }
    }
  },[AugmentList])

  const handleItemsClick = () => {
    setShowAugments(!showAugments)
  }

  // Adding images to boards
  const addImageToBoard = (item) => {
    setMyMonsterState(prevState => ({ ...prevState, Augment_id: item }));
    fetch(`${'http://localhost:3000/Augments'}/${item}`)
    .then(response => response.json())
    .then(data => setMyBoard([data]));
    setShowAugments(false)
  }

  // Items
  const thingsToShow = AugmentList.map(item => {
    return <Augment key={ item.id } id={ item.id } url={ item.image } myButtonClicked={() => {addImageToBoard(item.id, 'Augment_id')}}/>
  })

  const myItemBoard = myBoard.map((item) => {
    return (
      <div className='currentItem' key={item.id}>
        <Augment id={item.id} url={item.image} myButtonClicked={handleItemsClick} />
      </div>
    );
  });

  return (
    <>
      <div className={`${'BoardAugment'} Board`} ref={dropBoard}>
        <img className={'ArmorFrame'} src={'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/frames/square2.png'}/>
        {myItemBoard}
      </div>
      <div>
        {showAugments && (
          <div className='picturesContainer' title='Drag and Drop Items'>
            <div className='dropDownPictures'>{thingsToShow}</div>
          </div>
        )}
      </div>
    </>
  )
}

export default AugmentDrop