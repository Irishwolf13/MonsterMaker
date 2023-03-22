import '../App.css';

function MonsterImageCard({ url, id, onClick, selected, race }) {
  return (
    <div className='createMonsterHolder'>
      <button className={`lookButton ${selected && "selected"}`} onClick={onClick}>
        <img className='createMonsterCardBorder' src={'http://cloud-3.steamusercontent.com/ugc/2042984690531044011/2A279567C56E4EB74A0EABB828686B7E94C445CE/'}/>
        <img className='createMonsterCard' src={url} alt="A scary monster" />
      </button>
      <div>{race}</div>
      <br></br>
    </div>
  );
}

export default MonsterImageCard;