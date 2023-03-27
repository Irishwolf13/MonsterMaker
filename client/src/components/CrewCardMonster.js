import React from 'react';
import { useState, useEffect } from 'react'

function CrewCardMonster({monster, handleGameChange}) {
  const [displayArray, setDisplayArray] = useState([])

  useEffect(() => {
    let myArray = []
    monster.map(item => {
      // console.log(item)
      for (let i = 0; i < item.monsterCount; i++) {
        myArray.push((
          <div className='gameCardSmallHolder'>
            <div onClick={handleClicked2} className='gameCardSmallName'>{item.gameMonster.monster_name}</div>
            <img className='gameCardSmallImage' src={item.look.image} />
            <div className='gameCardSmallName'>Level: {item.gameMonster.level}</div>
          </div>
        ))
      }
      setDisplayArray(myArray)
    })
    // console.log(myArray)
  },[monster])

  const handleClicked2 = () => {
    console.log('iran')
  }
  const handleClicked = (item, number) => {
    let newCount = item.monsterCount + number
    if (newCount === 0) {
      fetch(`http://localhost:3000/join_games/${item.join_id}`,{
        method: 'DELETE',
        headers: {'content-type': 'application/json'}
      })
      .then(() => {
        setDisplayArray([])
        handleGameChange()
        // handleDisplayUpdate()
      })
    } else {
      fetch(`http://localhost:3000/join_games/${item.join_id}`,{
        method: 'PATCH',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({monster_count: newCount})
      })
      .then(() => {
        handleDisplayUpdate()
      })
    }
  }

  // This bit handles updating the display so I didn't write it twice in the handleClicked function
  const handleDisplayUpdate = () => {
    let myArray = []
    monster.map(item => {
      // console.log(item)
      for (let i = 0; i < item.monsterCount; i++) {
        myArray.push((<img className='gameCardSmallImage'src={item.look.image} />))
      }
    })
    setDisplayArray(myArray)
    handleGameChange()
  }

  // console.log(displayArray)
  const displayMonsterName = () => {
    // console.log(monster)
    return monster.map(item => (
      <div className='newbuttonContainer' >
       <button className='newbutton3' onClick={() => handleClicked(item, -1)}>-1 {item.gameMonster.monster_name}</button>
       <button className='newbutton3' onClick={() => handleClicked(item, 1)}>+1 {item.gameMonster.monster_name}</button>
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

export default CrewCardMonster