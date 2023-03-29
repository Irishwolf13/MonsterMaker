import React from 'react';
import "../App.css";
import { useDrag } from 'react-dnd';

function Weapon({ id, url, myButtonClicked, attack, style }) {
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
        <img className='selectionImages' ref={drag} src={url} />
        {style && (
          <>
            <div>{style}</div>
            <div>Attack: {attack}</div>
          </>
        )}
      </div>
    </>
  );
}

export default Weapon