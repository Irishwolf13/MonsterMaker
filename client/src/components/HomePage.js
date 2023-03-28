import { useNavigate } from 'react-router-dom';

function HomePage({ handleLogIn }) {
  //allow navigation
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup')
  }

  return (
    <>
      <div className='noScroll'>
        <button className='logInButton newbutton' onClick={handleLogIn}> Log IN </button>
        <button className='logInButton newbutton' onClick={handleSignUp}> Sign Up </button>
        <div>
          <img className='homeImage3' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/ghoul-hunter.png'/>
          <img className='homeImage1' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/nature-protector.png'/>
          <img className='homeImage2' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/defender.png'/>
          <img className='homeImage4' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/dwarvenWarlock.png'/>
          <img className='homeImage5' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/barbarian-raider.png'/>
          <img className='homeImage6' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/cintar%20warrior.png'/>
        </div>
        {/* https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/cintar%20warrior.png */}
        <img className='homeImage1b flipped' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/Flame%20warrior.png'/>
        <img className='homeImage2b flipped' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/orc1.png'/>
        <img className='homeImage3b flipped' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/unholy-priest.png'/>
        <img className='homeImage4b flipped' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/demonic-bloodsucker.png'/>
        <img className='homeImage5b flipped' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/undead%20caster.png'/>
        <img className='homeImage6b flipped' src='https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/orc-treasure-hunt.png'/>
        
      </div>
    </>
  );
}

export default HomePage;