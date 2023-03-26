import React from 'react';

function GameCard({monster}) {
  const handleClicked = (gameId) => {
    fetch(`http://localhost:3000/games/${gameId}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        alert("Game successfully deleted!");
      } else {
        alert("Something went wrong with delete");
      }
    })
    .catch(error => console.log(error));
  }

  const joinGames = () => {
    return monster.join_games.map(item => (
      <div>
        {[...Array(item.monsterCount)].map((_, i) => ( // create an array with 'item.monsterCount' items and map over it
          <img key={i} className='gameCardSmallImage' src={item.look.image}/> // render the image component in each iteration
          ))}
          <div className='gameCardNumberCount'> # of {item.gameMonster.monster_name}s: {item.monsterCount}</div>
      </div>
    ));
  }
  const gameNumbers = () => {
    const uniqueGameIds = [...new Set(monster.join_games.map(item => item.game_id))];
    return uniqueGameIds.map(gameId => (
      <div className='gameCardGameNumber'>
        Game: {gameId}
        <button onClick={() => handleClicked(gameId)}>Delete Game</button>
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