import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd'
import Picture from './Picture';
import Weapons from './Weapons';

function DragDrop({
  setMonsterState,
  setMyBoard,
  myBoard,
  fetchURL,
  imageClassName,
  buttonClassName,
  buttonText,
  boardNumber,
  myAccpets,
  item_id,
  drop_type,
  myArmor_id
})
  {

  const [deletedItems, setDeletedItems] = useState([])
  const [myList, setMyList] = useState([])
  const [myThings, setShowMyThings] = useState(false);

  // This will end up needing to be a switch for a function as we build this up
  const ItemComponent = drop_type === 'image' ? Picture : Weapons;

  const [{ isOver: isOverBoard }, dropBoard] = useDrop(() => (
    {
      accept: myAccpets,
      drop: (item) => {
        addImageToBoard(item.id, item_id)
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }
  ))
    // ################## I don't really like how this updates the setMyBoard, but it works ##############
  useEffect(() => {
    if(myArmor_id !== undefined) {
      fetch(`${fetchURL}/${myArmor_id}`)
      .then(response => response.json())
      .then(data => setMyBoard([data]));
    }else {
      fetch(`${fetchURL}/1`)
      .then(response => response.json())
      .then(data => setMyBoard([data]));
    }
    fetch(fetchURL)
      .then(response => response.json())
      .then(data => setMyList(data));
  },[myArmor_id])

  const handleItemsClick = () => {
    setShowMyThings(!myThings)
  }

  // Adding images to boards
  const addImageToBoard = (item, item_id) => {
    setMonsterState(prevState => ({ ...prevState, [item_id]: item }));
    fetch(`${fetchURL}/${item}`)
    .then(response => response.json())
    .then(data => setMyBoard([data]));
    setShowMyThings(false)
  }

  // Items
  const thingsToShow = myList.map(item => {
    return <ItemComponent key={ item.id } id={ item.id } url={ item.image } myButtonClicked={() => {addImageToBoard(item.id, item_id)}}/>
  })

  const myItemBoard = myBoard.map((item) => {
    return (
      <div className='currentItem' key={item.id}>
        <ItemComponent id={item.id} url={item.image} myButtonClicked={handleItemsClick} />
      </div>
    );
  });

  return (
    <>
      <div className={`${boardNumber} Board`} ref={dropBoard}>
        <img className={imageClassName} src={'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/frames/square2.png'}/>
        {myItemBoard}
      </div>
      <div>
        {myThings && (
          <div className='picturesContainer' title='Drag and Drop Items'>
            <div className='dropDownPictures'>{thingsToShow}</div>
          </div>
        )}
      </div>
    </>
  )
}

export default DragDrop