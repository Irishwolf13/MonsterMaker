import { useNavigate } from 'react-router-dom';

function HomePage({ handleLogIn }) {
  //allow navigation
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup')
  }

  return (
    <>
      <div>
        <button className='logInButton'onClick={handleLogIn}> Log IN </button>
        <button className='logInButton'onClick={handleSignUp}> Sign Up </button>
      </div>
    </>
  );
}

export default HomePage;