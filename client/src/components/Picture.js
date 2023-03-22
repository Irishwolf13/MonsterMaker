import React from 'react';
import "../App.css";
import { useDrag } from 'react-dnd';

function Picture({ id, url }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: {id: id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return(
    <>
      <div className='imageHolder'>
        <img
          className='selectionImages'
          ref={drag}
          src={url}
          // style={{border: isDragging ? "5px solid red" : "0px"}}
        />
      </div>
    </>
  );
}

export default Picture