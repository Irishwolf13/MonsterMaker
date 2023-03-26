import { useNavigate, useParams } from 'react-router-dom';

function ProfilePage({ user, monsterState, monsters }) {
  let { id } = useParams()

  //allow navigation
  const navigate = useNavigate();

  const myMonstersClicked = () => {
    navigate(`/show/monsters`)
  }

  const myGamesClicked = () => {
    navigate(`/gamePage/${id}`)
  }

  return (
    <>
      <div>
        <button className='logInButton'onClick={myMonstersClicked}> My Monsters </button>
        <button className='logInButton'onClick={myGamesClicked}> My Games </button>
      </div>
    </>
  );
}

export default ProfilePage;