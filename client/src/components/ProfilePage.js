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
        <button className='newbutton logInButton'onClick={myMonstersClicked}> My Monsters </button>
        <button className='newbutton logInButton'onClick={myGamesClicked}> My Crews </button>
      </div>
    </>
  );
}

export default ProfilePage;