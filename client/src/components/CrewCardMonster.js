import React from 'react';
import { useState, useEffect } from 'react'

function CrewCardMonster({monster, handleGameChange}) {
  const [displayArray, setDisplayArray] = useState([])
  const [displayArray2, setDisplayArray2] = useState([])

  useEffect(() => {
    let myArray = []
    let myArray2 = []
    monster.map(item => {
      // console.log(item)

        myArray.push((
          <div className='gameCardSmallHolder'>
            <img className='gameCardSmallImage' src={item.look.image} />
          </div>
        ))

        myArray2.push((
          <div className='gameCardSmallHolder'>
            <div className='gameCardSmallName'>Level: {item.gameMonster.level}</div>
            <div className='gameCardSmallName'>{item.gameMonster.monster_name}</div>
            <button className='newbutton3' onClick={() => handleClicked(item, -1)}>Remove</button>
          </div>
        ))
      setDisplayArray(myArray)
      setDisplayArray2(myArray2)
    })
    // console.log(myArray)
  },[monster])

  //This is going to be for later use... not sure what yet.
  // const handleClicked2 = () => {
  //   console.log('iran')
  // }

  const handleClicked = (item, number) => {
    // let myCount = 0
    // fetch(`http://localhost:3000/join_games/${item.game_id}`)
    // .then(res => res.json())
    // .then(data => {
    //   data.map(item => myCount = myCount + item.monster_count)
    //   if(myCount < 10 || number === -1) {
    //     let newCount = item.monsterCount + number
    //     if (newCount === 0) {
          fetch(`http://localhost:3000/join_games/${item.join_id}`,{
            method: 'DELETE',
            headers: {'content-type': 'application/json'}
          })
          .then(() => {
            setDisplayArray([])
            setDisplayArray2([])
            handleGameChange()
          })
      //   } else {
      //     fetch(`http://localhost:3000/join_games/${item.join_id}`,{
      //       method: 'PATCH',
      //       headers: {'content-type': 'application/json'},
      //       body: JSON.stringify({monster_count: newCount})
      //     })
      //     .then(() => {
      //       handleDisplayUpdate()
      //     })
      //   }

      // }else {
      //   alert('Max number of Crewmembers is 10 ')
      // }
    // })
  }

  // This bit handles updating the display so I didn't write it twice in the handleClicked function
  // const handleDisplayUpdate = () => {
  //   let myArray = []
  //   monster.map(item => {
  //     // console.log(item)
  //     for (let i = 0; i < item.monsterCount; i++) {
  //       myArray.push((<img className='gameCardSmallImage'src={item.look.image} />))
  //     }
  //   })
  //   setDisplayArray(myArray)
  //   handleGameChange()
  // }

  // console.log(displayArray)
  // const displayMonsterName = () => {
  //   // console.log(monster)
  //   return monster.map(item => (
  //     <div className='newbuttonContainer' >
  //      <button className='newbutton3' onClick={() => handleClicked(item, -1)}>{item.gameMonster.monster_name}</button>
  //     </div>
  //   ))
  // }

  return(
    <>
      <div>{displayArray}</div>
      <div>{displayArray2}</div>
      {/* {displayMonsterName()} */}
    </>
  );
}

export default CrewCardMonster