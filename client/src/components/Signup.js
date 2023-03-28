import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import React from 'react'

function SignUp({ setUser, monsterState, setMonsterState }) {
  //allow navigation
  const navigate = useNavigate();

  // Creates the initial state of blank
  const initialState = {
    username: '',
    password: '',
    email: ''
  };
  const [formState, setFormState] = useState(initialState);

  // Handle user Input
  const handleChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value});
  }

  //handle submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/users',{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(formState)
    })
    .then(res => {
      if(res.ok){
        res.json().then(obj => {
          setUser(obj)
          setMonsterState(prevState => ({ ...prevState, user_id: obj.id }))
          navigate(`/profile/${obj.id}`)
        })
      } else {
        res.json().then(data => {
          let messages = Object.values(data.errors).flat();
          alert(`Please Try again, ${messages.join(', ')}`);
        });
      }
    })
  }

  return (
    <>
      <div ></div>
      <div className='userNameDiv noScroll' id="login-form">
        <form className="form" onSubmit={handleSubmit}>
            <input className='newInput' name="username" type="text" required onChange={handleChange} value={formState.username} placeholder="username"/>
            <input className='newInput' name="password" type="password" required onChange={handleChange} value={formState.password} placeholder="password"/>
            <input className='newInput' name="email" type="text" required onChange={handleChange} value={formState.email} placeholder="email"/>
            <br></br>
            <button className='newbutton loginButton2' type="submit">Sign up</button>
        </form>
        <div>
          <img className='homeImage3' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/riding-raptor.png'/>
          <img className='homeImage1' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/Bridge-troll.png'/>
          <img className='homeImage2' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/forest-crusher.png'/>
          <img className='homeImage4' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/Fire%20Oracle.png'/>
          <img className='homeImage5' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/barbarian-raider.png'/>
        </div>
        
        <img className='homeImage1b flipped' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/Flame%20warrior.png'/>
        <img className='homeImage2b flipped' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/orc1.png'/>
        <img className='homeImage3b flipped' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/unholy-priest.png'/>
        <img className='homeImage4b flipped' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/demonic-bloodsucker.png'/>
        <img className='homeImage5b flipped' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/undead%20caster.png'/>
        
      </div>
    </>
  );
}

export default SignUp;