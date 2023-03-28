import React from 'react';
import CrewCardMonster from './CrewCardMonster';

function CrewCard({monster, handleGameChange}) {

  const handleClickedDelete = (deleteGame_id) => {
    console.log('BA-letted')
    console.log(deleteGame_id)
    fetch(`http://localhost:3000/games/${deleteGame_id}`, {
      method: 'DELETE'
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