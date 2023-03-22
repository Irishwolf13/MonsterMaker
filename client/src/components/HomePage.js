import { useNavigate } from 'react-router-dom';

function HomePage() {
  //allow navigation
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate('/login')
  }

  return (
    <>
      <div>
        <button className='logInButton'onClick={handleLogIn}> Log IN </button>
      </div>
    </>
  );
}

export default HomePage;