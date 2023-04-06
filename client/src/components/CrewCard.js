import React from 'react';
import CrewCardMonster from './CrewCardMonster';

function CrewCard({monster, handleGameChange, setMyCrews, id}) {

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
    if (monster.join_games.length > 0) {
      let myGame = (monster.join_games.map(game => (game.game_id))[0])
      return (
        <div className='crewImageHolder'>
          <button className='newbutton2 deleteCrewButton' onClick={() => handleClickedDelete(myGame)} >Delete Crew</button>
          <div className='crewCardSpacing' >CrewCard</div>
          <CrewCardMonster monster={monster.join_games} handleGameChange={handleGameChange}/>
        </div>
      );
    } else {
      return null; // Return null to render nothing
    }
  }

  return(
    <>
      {displayGame()}
    </>
  );
}

export default CrewCard;