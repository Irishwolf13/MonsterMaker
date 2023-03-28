import React, { useState, useEffect } from 'react';
import MonsterImageCard from './MonsterImageCard.js'
import { useNavigate } from 'react-router-dom';

function ChooseMonster({user, setMonsterState, monsterState, monsters}) {

  const [filterName, setFilterName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  //allow navigation
  const navigate = useNavigate();

  const handleAvatarClicked = (lookID) => {
    setMonsterState(prevState => ({ ...prevState, look_id: lookID}));
    navigate('/create/monster')
  }

  const viewMonsters = () => {
    const filteredMonsters = monsters.filter(monster => monster.race.includes(filterName));
    const sortedMonsters = filteredMonsters.sort((a, b) => a.race.localeCompare(b.race));
    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentMonsters = sortedMonsters.slice(firstItemIndex, lastItemIndex);
  
    return currentMonsters.map(monster => (
      <MonsterImageCard
        key={monster.id}
        url={monster.image}
        id={monster.id}
        race={monster.race
          .toLowerCase()
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
        onClick={() => handleAvatarClicked(monster.id)}
      />
    ));
  };

  const totalPages = Math.ceil(monsters.filter(monster => monster.race.includes(filterName)).length / itemsPerPage);

  const nextButton = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const prevButton = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleFilter = (e) => {
    setFilterName(e.target.value.toLowerCase())
    setCurrentPage(1);
  }
  return (
    <>
      <label>
        <div className='smalltitleDiv' >Filter by Name:
        <input className='newInput filterInput' placeholder='Sort by name' type="text" value={filterName} onChange={(e) => handleFilter(e)} />
        </div>
      </label>
      <div className='titleDiv'>Select Avatar</div>
      <div className='looks'>
        {viewMonsters()}
      </div>
      {totalPages > 1 &&
        <div className='pagination'>
          <button className='newbutton' onClick={prevButton}>{'<<'}</button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? 'active-page newbuttonSelected' : 'newbutton'}
            >
              {index + 1}
            </button>
          ))}
          <button className='newbutton' onClick={nextButton}>{'>>'}</button>
        </div>
      }
    </>
  );
}

export default ChooseMonster;