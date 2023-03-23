import '../App.css';
import { useNavigate } from 'react-router-dom';

function MonsterCharacterCard({id, url, level, monsterName, HP, MP, attack, armor_type, armor_image, weapon_image, movement, bio, handleMonsterDelete }) {
  //allow navigation
  const navigate = useNavigate();
  
  let myImage;
  let forName;
  let forArmor;
  let forWeapon;
  let forCard;
  let forBoarder;
  let forLevel;
  let forExtras;
  switch (true) {
    case level > 10:
      myImage = 'http://cloud-3.steamusercontent.com/ugc/2042984690529224232/F60F430287941F7F6BFBAA29B1C7AF29BE99330A/';
      forName = 'characterCardName3'
      forArmor = 'smallArmor3'
      forWeapon = 'smallWeapon3'
      forCard = 'monsterCard3'
      forBoarder = 'monsterCardBoarder3'
      forLevel = 'monsterCardLevel3'
      forExtras = 'monsterCardExtras3'
      break;
    case level > 1 && level <= 10:
      myImage = "http://cloud-3.steamusercontent.com/ugc/2042984690529132886/6A9ADA28F588800BF91D9B414E802A48C8839BB8/";
      forName = 'characterCardName2'
      forArmor = 'smallArmor2'
      forWeapon = 'smallWeapon2'
      forCard = 'monsterCard2'
      forBoarder = 'monsterCardBoarder2'
      forLevel = 'monsterCardLevel2'
      forExtras = 'monsterCardExtras2'
      break;
    default:
      myImage = 'http://cloud-3.steamusercontent.com/ugc/2042984690529165000/768B0F9519797294A9A1251EA5015ACA97ED8C02/';
      forName = 'characterCardName1'
      forArmor = 'smallArmor1'
      forWeapon = 'smallWeapon1'
      forCard = 'monsterCard1'
      forBoarder = 'monsterCardBoarder1'
      forLevel = 'monsterCardLevel1'
      forExtras = 'monsterCardExtras1'
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
    <div className='characterCardHolder'>
      <div className={forName}>{monsterName}</div>
      <img className={forArmor} src={armor_image} alt="armor"/>
      <img className={forWeapon} src={weapon_image} alt="armor"/>
      <img className={forCard} src={url} alt="A scary monster" />
      <img className={forBoarder} src={myImage}/>
      <div>
        <div className={forLevel}>{level} </div>
        <div className={forExtras}>
          <div>Armor type: {armor_type}</div>
          <div>HitPoints: {HP} </div>
          <div>MagicPoints: {MP} </div>
          <div>Attack Rating: {attack} </div>
        </div>
      </div>
      <div>{bio}</div>
      <button onClick={handleClicked}>Delete</button>
      <button onClick={handleEditMonster}>Edit Monster</button>
    </div>
  );
}

export default MonsterCharacterCard;