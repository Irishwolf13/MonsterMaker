import React from 'react';
import GameCardMonster from './GameCardMonster';

function GameCard({monster}) {
  console.log(monster.join_games)
  const displayGame = () => {
    return (
      <div>
        <div>GameCard: {monster.id}</div>
        <GameCardMonster monster={monster.join_games}/>
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