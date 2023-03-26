import React from 'react';

function GameCard({monster}) {
  // console.log('MonsterDifficulty: ' + monster.difficulty)
  // monster.join_games.map(item => {
  //   console.log('GameMonster: ' + item.gameMonster.monster_name)
  //   console.log('Monster Count: ' + item.monsterCount)
  // })
  const joinGames = () => {
    return monster.join_games.map(item => (
      <div>
        {[...Array(item.monsterCount)].map((_, i) => ( // create an array with 'item.monsterCount' items and map over it
          <img key={i} className='gameCardSmallImage' src={item.look.image}/> // render the image component in each iteration
          ))}
          <div className='gameCardNumberCount'> Number of {item.gameMonster.monster_name}s: {item.monsterCount}</div>
      </div>
    ));
  }
  const gameNumbers = () => {
    const uniqueGameIds = [...new Set(monster.join_games.map(item => item.game_id))];
    return uniqueGameIds.map(gameId => (
      <div className='gameCardGameNumber'>
        Game: {gameId}
      </div>
    ));
  }
  return(
    <>
      <div className='gameCardImageHolder'>
        {joinGames()}
      </div>
      {gameNumbers()}
    </>
  );
}

export default GameCard