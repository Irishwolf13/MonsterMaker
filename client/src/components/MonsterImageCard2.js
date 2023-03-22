import '../App.css';

function MonsterImageCard2({ url, handleReselectAvatar }) {
  return (
    <div>
      <button>
      <img onClick={handleReselectAvatar} className='createMonsterCard' src={url} alt="A scary monster" />
      </button>
    </div>
  );
}

export default MonsterImageCard2;