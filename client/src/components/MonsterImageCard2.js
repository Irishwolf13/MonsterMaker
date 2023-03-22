import '../App.css';

function MonsterImageCard2({ url, handleReselectAvatar }) {
  return (
    <div>
      <button className='createMonsterButton'>
        <img onClick={handleReselectAvatar} className='createMonsterCard2' src={url} alt="A scary monster" />
      </button>
    </div>
  );
}

export default MonsterImageCard2;