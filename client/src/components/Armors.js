import React from 'react';
import "../App.css";
import { useDrag } from 'react-dnd';

function Armor({ id, url, myButtonClicked, defense, material, weight }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: {id: id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return(
    <>
      <div onClick={myButtonClicked} className='imageHolder'>
        <img className='selectionImages' ref={drag} src={url}/>
        {material && (
          <>
            <div>{material}</div>
            <div>Defense: {defense}</div>
          </>
        )}
      </div>
    </>
  );
}

export default Armor