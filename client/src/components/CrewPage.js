import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import CrewCard from './CrewCard';
import { useNavigate } from 'react-router-dom';

function CrewPage({ user, monsterState, monsters }) {
  let { id } = useParams()  
  //allow navigation
  const navigate = useNavigate();

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

  const viewCrews = () => {
    let myCrewNumber = 0
    return myCrews.map(monster => (
      <div className='crewAddButtons'>
        <CrewCard key={monster.id} monster={monster} handleGameChange={handleGameChange} setMyCrews={setMyCrews} id={id} myCrewNumber={++myCrewNumber}/>
      </div>
    ))
  };

const handleCreateCrew = () => {
  let myUser = {user_id: user.id}
  fetch(`http://localhost:3000/games/`,{
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(myUser)
  })
  .then(res => {
    if (res.ok) {
      alert('Game Created!, Now you need to add some Monsters!');
      navigate('/show/monsters')
    } else {
      res.json().then(data => {
        let messages = Object.values(data.errors).flat();
        alert(`Validation failed: ${messages.join(', ')}`);
      });
    }
  })
  .catch(error => alert(`Error: ${error.message}`))
}
  return (
    <>
    <div></div>
    <button onClick={handleCreateCrew} className='newbutton loginButton2' >Create New Crew</button>
      <div>
        <br></br>
        <br></br>
        {viewCrews()}
      </div>
    </>
  );
}

export default CrewPage;