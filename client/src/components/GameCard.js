import React from 'react';
import GameCardMonster from './GameCardMonster';

function GameCard({monster, handleGameChange}) {
  // console.log(monster.join_games)
  const displayGame = () => {
    return (
      <div>
        <div>GameCard: {monster.id}</div>
        <GameCardMonster monster={monster.join_games} handleGameChange={handleGameChange}/>
      </div>
    )
  }

  return(
    <>
      {displayGame()}
    </>
  );
}

export default GameCard