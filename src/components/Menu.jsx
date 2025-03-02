import React from 'react';

function Menu({ labs, onLabClick }) {
  return (
    <nav className={'Nav'}>
      <ul>
      {labs.map((lab) => (
          <li key={lab.id} style={{ marginBottom: '5px' }}>
            <button onClick={() => onLabClick(lab.id)} className={'button'}>
              {lab.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;