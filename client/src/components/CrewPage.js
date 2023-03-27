import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import GameCard from './CrewCard';

function CrewPage({ user, monsterState, monsters }) {
  let { id } = useParams()

  //allow navigation
  const navigate = useNavigate();
  const [myGames, setMyGames] = useState([]);
 
  useEffect(() => {
    fetch(`http://localhost:3000/games/${id}`)
    .then(res => res.json())
    .then(data => setMyGames(data))
  },[])

  const handleGameChange = () => {
    fetch(`http://localhost:3000/games/${id}`)
    .then(res => res.json())
    .then(data => setMyGames(data))
  }
  // console.log(myGames)
 const viewGames = () => {
  return myGames.map(monster => (
    <GameCard key={monster.id} monster={monster} handleGameChange={handleGameChange}/>
  ))
};
  return (
    <>
    <div></div>
    <button>Create New Crew</button>
      <div>
        {viewGames()}
      </div>
    </>
  );
}

export default CrewPage;