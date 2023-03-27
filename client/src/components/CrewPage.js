import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import CrewCard from './CrewCard';

function CrewPage({ user, monsterState, monsters }) {
  let { id } = useParams()

  const [myCrews, setMyCrews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/games/${id}`)
    .then(res => res.json())
    .then(data => setMyCrews(data))
  },[])

  const handleGameChange = () => {
    fetch(`http://localhost:3000/games/${id}`)
    .then(res => res.json())
    .then(data => setMyCrews(data))
  }
  // console.log(myGames)
 const viewCrews = () => {
  return myCrews.map(monster => (
    <div className='crewAddButtons'>
      <CrewCard key={monster.id} monster={monster} handleGameChange={handleGameChange}/>
    </div>
  ))
};
  return (
    <>
    <div></div>
    <button className='newbutton loginButton2' >Create New Crew</button>
      <div>
        <br></br>
        <br></br>
        {viewCrews()}
      </div>
    </>
  );
}

export default CrewPage;