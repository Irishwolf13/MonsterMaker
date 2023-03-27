import React from 'react';
import { useState, useEffect } from 'react'

function GameCardMonster({monster, handleGameChange}) {
  const [displayArray, setDisplayArray] = useState([])

  useEffect(() => {
    let myArray = []
    monster.map(item => {
      for (let i = 0; i < item.monsterCount; i++) {
        myArray.push((<img className='gameCardSmallImage'src={item.look.image} />))
      }
      setDisplayArray(myArray)
    })
  },[monster])

  const handleClicked = (item) => {
    let newCount = item.monsterCount -1
    fetch(`http://localhost:3000/join_games/${item.join_id}`,{
      method: 'PATCH',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({monster_count: newCount})
    })
    .then(() => {
      // update displayArray directly here
      let myArray = []
      monster.map(item => {
        console.log(item)
        for (let i = 0; i < item.monsterCount; i++) {
          myArray.push((<img className='gameCardSmallImage'src={item.look.image} />))
        }
      })
      setDisplayArray(myArray)
      handleGameChange()
    })
  }

  // console.log(displayArray)
  const displayMonsterName = () => {
    return monster.map(item => (
      <div>
       <button onClick={() => handleClicked(item)}>Join Game:  {item.join_id}</button>
      </div>
    ))
  }
  return(
    <>
      {displayArray}
      {displayMonsterName()}
    </>
  );
}

export default GameCardMonster