import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import React from 'react'

function Login({ setUser, monsterState, setMonsterState }) {
  //allow navigation
  const navigate = useNavigate();

  // Creates the initial state of blank
  const initialState = {
    username: '',
    password: ''
  };
  const [formState, setFormState] = useState(initialState);

  // Handle user Input
  const handleChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value});
  }

  //handle submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/login',{
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
        res.json().then(data => alert(data.error)); 
      }
    })
  }

  return (
    <>
      <div className='userNameDiv'></div>
      <div id="login-form">
        <form className="form" onSubmit={handleSubmit}>
            <input name="username" type="text" required onChange={handleChange} value={formState.username} placeholder="username"/>
            <input name="password" type="password" required onChange={handleChange} value={formState.password} placeholder="password"/>
            <br></br>
            <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;