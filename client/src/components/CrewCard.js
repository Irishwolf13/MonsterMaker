import React from 'react';
import CrewCardMonster from './CrewCardMonster';

function CrewCard({monster, handleGameChange}) {
  const displayGame = () => {
    if (monster.join_games.length > 0) {
      return (
        <div className='crewImageHolder'>
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