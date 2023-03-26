import { Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";
import { React, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

// import DragDrop from './components/DragDrop';
import './App.css'
import ParticleBackground from 'react-particle-backgrounds'
// All the pages we will route to
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import ProfilePage from './components/ProfilePage';
import GamePage from './components/GamesPage';
import CreateMonster from './components/CreateMonster';
import ChooseMonster from './components/ChooseMonster';
import ShowMonsters from './components/ShowMonsters';
import ShowMyMonster from './components/ShowMyMonster';

function App() {
  //allow navigation
  const navigate = useNavigate();

  const settings = {
    particle: {
      particleCount: 100,
      color: "#d68c38",
      minSize: 2,
      maxSize: 10
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 30,
      minSpeed: 0.2,
      maxSpeed: 1.5
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 5000
    }
  }

  const initalState = { 
    monster_name: 'not Frank',
    look_id: 1,
    // user_id : 1,
    armor_id: 1,
    weapon_id: 1,
    level: 1,
    hit_points: 1,
    base_armor: 1,
    attack: 1,
    magic: 1,
    movement: 1,
    bio: ''
  }
  
  const [armorBoard, setArmorBoard] = useState([])
  const [weaponBoard, setWeaponBoard] = useState([])
  
  const [user, setUser] = useState({})
  const [monsters, setMonsters] = useState([]);
  const [monsterState, setMonsterState] = useState(initalState);

  useEffect(() => {
    fetch('/authorized')
    .then(res => {
      if(res.ok) {
        // res.json().then(data => console.log(data))
      } else {
        setUser(null)
      }
    })
    fetch('http://localhost:3000/looks')
      .then(response => response.json())
      .then(data => setMonsters(data));
  },[])

  //handles logout clicked
  const handleLogOut = () => {
    setUser({})
    setMonsterState(initalState)
    fetch('http://localhost:3000/logout', {
      method: 'DELETE',
    })
    .then(res => {
      if (res.ok) {
        //console.log(user)
        alert('Logged out')
        navigate('/')
      } else {
        //console.log('else: ')
        //console.log(user)
        //handle errors
      }
    })
  }

  const handleShowMonsters = () => {
    navigate('/show/monsters/')
  }
  const handleCreateMonsters = () => {
    setMonsterState(prevState => ({ ...prevState,
      monster_name: 'Frank',
      armor_id: 1,
      weapon_id: 1,
      level: 1,
      hit_points: 1,
      base_armor: 1,
      attack: 1,
      magic: 1,
      movement: 1,
      bio: ''
    }))
    setArmorBoard([])
    setWeaponBoard([])
    navigate('/choose/monster')
  }
  const handleLogIn = () => {
    navigate('/login')
  }
  const handleProfilePage = () => {
    navigate(`/profile/${user.id}`)
  }
  return (
    <div className="App">
      {!user.id && <button onClick={() => {navigate('/')}}>Home</button>}
      <div className='background'><ParticleBackground settings={settings}/></div>
      <DndProvider backend={ HTML5Backend }>
      {
        user.id &&
        <>
          <button onClick={handleLogOut}>LogOut</button>
          <button onClick={handleShowMonsters}>Show My Monsters</button>
          <button onClick={handleCreateMonsters}>New Monster</button>
          <button onClick={handleProfilePage}>Profile Page</button>
        </>
      }
        <Routes>
          <Route
            path="/"
            element={<HomePage handleLogIn={handleLogIn} user={user}/>}
          />
          <Route
            path="/login"
            element={<Login 
                user={user} 
                setUser={setUser}
                monsterState={monsterState} 
                setMonsterState={setMonsterState}
              />}
          />
          <Route
            path="/signup"
            element={<Signup 
              user={user} 
              setUser={setUser}
              monsterState={monsterState} 
              setMonsterState={setMonsterState}
              monsters={monsters}
            />}
          />
          <Route
            path="/profile/:id"
            element={<ProfilePage 
              user={user} 
              monsterState={monsterState}
              monsters={monsters}
            />}
          />
          <Route
            path="/gamePage/:id"
            element={<GamePage 
              user={user} 
              monsterState={monsterState}
              monsters={monsters}
            />}
          />
          <Route
            path="/choose/monster"
            element={<ChooseMonster 
              user={user} 
              monsterState={monsterState} 
              setMonsterState={setMonsterState}
              monsters={monsters}
              />}
          />
          <Route
            path="/show/monsters/"
            element={<ShowMonsters
              userMonsters={monsterState.user_id}
            />}
          />
          <Route
            path="/show/monster/:id"
            element={<ShowMyMonster
              user={user}
              monsterState={monsterState}
              monsters={monsters}
            />}
          />
          <Route
            path="/create/monster/"
            element={<CreateMonster 
              user={user} 
              monsterState={monsterState}
              monsters={monsters}
              />}
          />
        </Routes>
      </DndProvider>
    </div>
  );
}

export default App;
