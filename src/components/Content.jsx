import React from 'react';

function Content({ lab }) {
  if (!lab) {
    return <p>Выберите лабораторную работу из меню.</p>;
  }

  return (
    <div style={{ padding: '20px'}}>
      <h2>{lab.title}</h2>
      <p>{lab.content}</p>
    </div>
  );
}

export default Content;