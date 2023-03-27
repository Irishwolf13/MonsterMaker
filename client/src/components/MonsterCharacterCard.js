import '../App.css';
import { useNavigate } from 'react-router-dom';
import { HTML5Backend } from "react-dnd-html5-backend";
import ParticleBackground from 'react-particle-backgrounds'

function MonsterCharacterCard({user_id, monster_id, url, level, monsterName, HP, MP, attack, armor_defense, armor_base, armor_image, weapon_image, movement, bio, augmnet, handleMonsterDelete }) {
  //allow navigation
  const navigate = useNavigate();
  
  const settings3 = {
    particle: {
      particleCount: 150,
      color: "#e3d5d5",
      minSize: 1,
      maxSize: 4
    },
    velocity: {
      directionAngle: 180,
      directionAngleVariance: 30,
      minSpeed: 0.1,
      maxSpeed: 0.5
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.4,
      opacityTransitionTime: 10000
    }
  }
  const settings2 = {
    particle: {
      particleCount: 50,
      color: "#e2b16d",
      minSize: 1,
      maxSize: 2
    },
    velocity: {
      directionAngle: -95,
      directionAngleVariance: 10,
      minSpeed: 0.1,
      maxSpeed: 1
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.4,
      opacityTransitionTime: 10000
    }
  }

  const settings1 = {
    canvas: {
      useBouncyWalls: true
    },
    particle: {
      particleCount: 250,
      color: "#FFF",
      minSize: 0.5,
      maxSize: 1
    },
    velocity: {
      directionAngle: 90,
      directionAngleVariance: 180,
      minSpeed: 0.03,
      maxSpeed: 0.08
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.7,
      opacityTransitionTime: 7000
    }
  }
  let myArmorRating = (armor_base + armor_defense);
  let myImage;
  let forBack;
  let forBackBoarder;
  let forName;
  let forArmor;
  let forWeapon;
  let forCard;
  let forBoarder;
  let forLevel;
  let forExtras;
  let forBio;
  let forDelete;
  let forEdit;
  let forAugment;
  let forArmorRating;
  let forBackgroundBubbles;
  let forBubblesStyle;
  let forFormAdd;
  switch (true) {
    case level > 10:
      myImage = 'http://cloud-3.steamusercontent.com/ugc/2042984690529224232/F60F430287941F7F6BFBAA29B1C7AF29BE99330A/';
      forBack = 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/frames/card_3_back.png'
      forName = 'characterCardName3'
      forArmor = 'smallArmor3'
      forWeapon = 'smallWeapon3'
      forCard = 'monsterCard3'
      forBoarder = 'monsterCardBoarder3'
      forBackBoarder = 'monsterCardBackBoarder3'
      forLevel = 'monsterCardLevel3'
      forExtras = 'monsterCardExtras3'
      forBio = 'monsterCardBio3'
      forEdit = 'monsterCardEdit3'
      forDelete = 'monsterCardDelete3'
      forAugment = 'monsterCardAugment3'
      forArmorRating= 'armorRating3'
      forBackgroundBubbles= 'forBackground3'
      forBubblesStyle=settings3
      forFormAdd='forFormAdd3'
      break;
    case level > 1 && level <= 10:
      myImage = "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/frames/card_1_B.png";
      forBack = 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/frames/card_1_back.png'
      forName = 'characterCardName2'
      forArmor = 'smallArmor2'
      forWeapon = 'smallWeapon2'
      forCard = 'monsterCard2'
      forBoarder = 'monsterCardBoarder2'
      forBackBoarder = 'monsterCardBackBoarder2'
      forLevel = 'monsterCardLevel2'
      forExtras = 'monsterCardExtras2'
      forBio = 'monsterCardBio2'
      forEdit = 'monsterCardEdit2'
      forDelete = 'monsterCardDelete2'
      forAugment = 'monsterCardAugment2'
      forArmorRating= 'armorRating2'
      forBackgroundBubbles= 'forBackground2'
      forBubblesStyle=settings2
      forFormAdd='forFormAdd2'
      break;
    default:
      myImage = 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/frames/card1Front.png';
      forBack = 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/frames/card_2_back3.png'
      forName = 'characterCardName1'
      forArmor = 'smallArmor1'
      forWeapon = 'smallWeapon1'
      forCard = 'monsterCard1'
      forBoarder = 'monsterCardBoarder1'
      forBackBoarder = 'monsterCardBackBoarder1'
      forLevel = 'monsterCardLevel1'
      forExtras = 'monsterCardExtras1'
      forBio = 'monsterCardBio1'
      forEdit = 'monsterCardEdit1'
      forDelete = 'monsterCardDelete1'
      forAugment = 'monsterCardAugment1'
      forArmorRating= 'armorRating1'
      forBackgroundBubbles= 'forBackground1'
      forBubblesStyle=settings1
      forFormAdd='forFormAdd1'
  }
  
  const handleClicked = () => {
    fetch(`http://localhost:3000/monsters/${monster_id}`, {
      method: 'DELETE'
    })
    .then(() => handleMonsterDelete(monster_id))
  }
  const handleEditMonster = (e) => {
    navigate(`/show/monster/${monster_id}`)
  }
  const handleAddToGame = (e) => {
    e.preventDefault();
    const selectElement = e.target.elements.gameNumber;
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const selectedValue = selectedOption.value;
    console.log("game_id: "+ selectedValue);
    console.log("monster_id: " + monster_id)
    console.log("user_id: "+user_id)
    // HERE WE WILL NEED TO DO A POST/PATCH TO GAMES (OR MAYBE JOIN_GAMES)
    // ALSO, GOING TO NEED TO DYNAMICALLY SET THE CHIOCES ON THE SELECT BELOW.........
  };
  return (
    <div className='characterCardHolder'>
      <div className={forName}>{monsterName}</div>
      <img className={forArmor} src={armor_image} alt="armor"/>
      <img className={forWeapon} src={weapon_image} alt="armor"/>
      <img className={forCard} src={url} alt="A scary monster" />
      <img className={forBoarder} src={myImage}/>
      <img className={forBackBoarder} src={forBack} />
      <div>
        <div className={forLevel}>{level} </div>
        <div className={forExtras}>
          <div>Move Speed: {movement}</div>
          <div>Hit Points: {HP} </div>
          <div>Magic Points: {MP} </div>
          <div>Attack Rating: {attack}</div>
        </div>
      </div>
      <button className={`${forDelete} newbutton2`} onClick={handleClicked}>Delete</button>
      <button className={`${forEdit} newbutton2`} onClick={handleEditMonster}>Edit Monster</button>
      <div className={forBio} >{bio}</div>
      <img className={forAugment} src={'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/orbs/green.png'} />
      <div className={forArmorRating}> {myArmorRating} </div>
      <div className={forBackgroundBubbles}><ParticleBackground settings={forBubblesStyle}/></div>
      <form className={forFormAdd} onSubmit={handleAddToGame}>
        <button className='newbutton2' type="submit">Add to Crew</button>
        <select className='newbutton2' name="gameNumber" defaultValue="1">
          <option className='orange' value="1">1</option>
          <option className='orange' value="2">2</option>
          <option className='orange' value="3">3</option>
        </select>
      </form>
    </div>
  );
}

export default MonsterCharacterCard;