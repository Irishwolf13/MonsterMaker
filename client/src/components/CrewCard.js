import React from 'react';
import CrewCardMonster from './CrewCardMonster';

function CrewCard({monster, handleGameChange}) {
  // console.log(monster.join_games)
  const displayGame = () => {
    return (
      <div>
        {/* <div>GameCard: {monster.id}</div> */}
        <CrewCardMonster monster={monster.join_games} handleGameChange={handleGameChange}/>
      </div>
    )
  }

  return(
    <>
      {displayGame()}
    </>
  );
}

export default CrewCard