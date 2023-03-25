import React from 'react';
import "../App.css";
import { useDrag } from 'react-dnd';

function Weapon({ id, url, myButtonClicked }) {

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "sword",
    item: {id: id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return(
    <>
      <div onClick={myButtonClicked} className='imageHolder'>
        <img
          className='selectionImages'
          ref={drag}
          src={url}
          // style={{ border: isDragging ? "2px solid blue" : "0px" }}
        />
      </div>
    </>
  );
}

export default Weapon