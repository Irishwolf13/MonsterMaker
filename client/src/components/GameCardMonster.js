import React from 'react';
import { useState, useEffect } from 'react'

function GameCardMonster({monster}) {

  const handleClicked = (item) => {
    console.log(item)
  }

  const displayGame = () => {
    return monster.map(item => {
      // console.log(item)
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
       <button onClick={() => handleClicked(item)}>Edit Monster Count</button>
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