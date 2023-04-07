import React from 'react';
import CrewCardMonster from './CrewCardMonster';

function CrewCard({monster, handleGameChange, setMyCrews, id, myCrewNumber}) {

  const handleClickedDelete = (deleteGame_id) => {
    // console.log('BA-letted')
    // console.log(deleteGame_id)
    fetch(`http://localhost:3000/games/${deleteGame_id}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (res.ok) {
        fetch(`http://localhost:3000/games/${id}`)
        .then(res => res.json())
        .then(data => setMyCrews(data))
        // .then(alert('Crew Deleted!'))
      }
    })
  }

  const displayGame = () => {
    let myGame = (monster.join_games.map(game => (game.game_id))[0])
    return (
      <div className='crewHolder'>
        <img className='crewImageBackground' src='https://place-hold.it/950x350'/>
        <div className='crewNameSpace' >Crew {myCrewNumber}</div>
        <button className='newbutton2 deleteCrewButton' onClick={() => handleClickedDelete(myGame)} >Delete Crew</button>
        <CrewCardMonster monster={monster.join_games} handleGameChange={handleGameChange}/>
      </div>
    );
  }

  return(
    <>
      {displayGame()}
    </>
  );
}

export default CrewCard;