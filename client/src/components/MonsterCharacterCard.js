import '../App.css';
import { useNavigate } from 'react-router-dom';

function MonsterCharacterCard({id, url, level, monsterName, HP, MP, attack, armor_type, armor_image, weapon_image, movement, bio, handleMonsterDelete }) {
  //allow navigation
  const navigate = useNavigate();
  
  let src;
  switch (true) {
    case level > 10:
      src = 'http://cloud-3.steamusercontent.com/ugc/2042984690529224232/F60F430287941F7F6BFBAA29B1C7AF29BE99330A/';
      break;
    case level > 1 && level <= 10:
      src = 'http://cloud-3.steamusercontent.com/ugc/2042984690529165000/768B0F9519797294A9A1251EA5015ACA97ED8C02/';
      break;
    default:
      src = "http://cloud-3.steamusercontent.com/ugc/2042984690529132886/6A9ADA28F588800BF91D9B414E802A48C8839BB8/";
  }

  const handleClicked = () => {
    fetch(`http://localhost:3000/monsters/${id}`, {
      method: 'DELETE'
    })
    .then(() => handleMonsterDelete(id))
  }
  const handleEditMonster = (e) => {
    navigate(`/show/monster/${id}`)
  }
  return (
    <div>
      <div>Character Card</div>
      <div>Name: {monsterName}</div>
      <img className='monsterCard' src={url} alt="A scary monster" />
      <img className='smallImage' src={armor_image} alt="armor"/>
      <img className='smallImage' src={weapon_image} alt="armor"/>
      <img className='monsterCardBoarder' src={src}/>
      <div>
        <>Level: {level} </>
        <>HitPoints: {HP} </>
        <>MagicPoints: {MP} </>
        <>Attack Rating: {attack} </>
        <>Armor type: {armor_type}</>
      </div>
      <div>{bio}</div>
      <button onClick={handleClicked}>Delete</button>
      <button onClick={handleEditMonster}>Edit Monster</button>
    </div>
  );
}

export default MonsterCharacterCard;