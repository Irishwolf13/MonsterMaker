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
  drop_type
})
  {

  const [deletedItems, setDeletedItems] = useState([])
  const [myList, setMyList] = useState([])
  const [myThings, setShowMyThings] = useState(false);
  
  // This will end up needing to be a switch for a function as we build this up
  const ItemComponent = drop_type === 'picture' ? Picture : Weapons;

  const [{ isOver: isOverBoard }, dropBoard] = useDrop(() => (
    {
      accept: myAccpets,
      drop: (item) => {
        addImageToBoard(item.id, item_id)
        setShowMyThings(false)
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }
  ))

  useEffect(() => {
    fetch(fetchURL)
      .then(response => response.json())
      .then(data => setMyList(data));
  },[])

  // Adding images to boards
  const addImageToBoard = (item, item_id) => {
    setMonsterState(prevState => ({ ...prevState, [item_id]: item }));
    fetch(`${fetchURL}/${item}`)
    .then(response => response.json())
    .then(data => setMyBoard([data]));
  }

  // Items
  const thingsToShow = myList.map(item => {
    return <ItemComponent key={ item.id } id={ item.id } url={ item.image }/>
  })

  const removeItem = (id, item_id) => {
    const filtered = myBoard.filter((item) => id == item.id)
    const tempBoard = myBoard.filter((item) => id !== item.id)
    setDeletedItems([...deletedItems, filtered[0]])
    setMyBoard(tempBoard)
    setMonsterState(prevState => ({ ...prevState, [item_id]: 1 }));
  }

  const myItemBoard = myBoard.map((item) => {
    return (
      <div className='currentItem' key={item.id}>
        <ItemComponent id={item.id} url={item.image}  />
        <button onClick={() => removeItem(item.id, item_id)}> Remove </button>
      </div>
    );
  });

  const handleItemsClick = () => {
    setShowMyThings(!myThings)
  }

  return (
    <>
      <div className={boardNumber} ref={dropBoard}>
        <img className={imageClassName} src={'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/frames/rectangle1.png'}/>
        {myItemBoard}
      </div>
      <div>
        <button className={buttonClassName} onClick={handleItemsClick}>{buttonText}</button>
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