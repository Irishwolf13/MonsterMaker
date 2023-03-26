import React from 'react';
import { useState, useEffect } from 'react'

function GameCardMonster({monster, handleGameChange}) {
  // console.log('Monster')
  // console.log(monster)
  const handleClicked = (item) => {
    let newCount = item.monsterCount -1
    fetch(`http://localhost:3000/join_games/${item.join_id}`,{
      method: 'PATCH',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({monster_count: newCount})
    })
    // .then(window.location.reload()) //This is cheating
  }

  const displayGame = () => {
    return monster.map(item => {
      console.log(item)
      let myArray = []
      for (let i = 0; i < item.monsterCount; i++) {
        myArray.push(item.look.image)
      }
      // console.log(myArray)
      return myArray.map(item => (
        <img className='gameCardSmallImage'src={item} />
      ))
    })
  }

  const displayMonsterName = () => {
    return monster.map(item => (
      <div>
       <button onClick={() => handleClicked(item)}>Edit Monster Count {item.join_id}</button>
      </div>
    ))
  }
  return(
    <>
      {displayGame()}
      {displayMonsterName()}
    </>
  );
}

export default GameCardMonster