import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import GameCard from './GameCard';

function GamePage({ user, monsterState, monsters }) {
  let { id } = useParams()

  //allow navigation
  const navigate = useNavigate();
  const [myGames, setMyGames] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/games/${id}`)
      .then(res => res.json())
      .then(data => setMyGames(data))
  },[])
  // console.log(myGames)
 const viewGames = () => {
  return myGames.map(monster => (
    <GameCard key={monster.id} monster={monster}/>
  ))
};
  return (
    <>
      <div>
        {viewGames()}
      </div>
    </>
  );
}

export default GamePage;