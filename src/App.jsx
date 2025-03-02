import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Content from './components/Content';
import Button from './components/Button';
import './App.css'; // Подключаем файл стилей

function App() {
  const [labs, setLabs] = useState([
    { id: 1, title: 'Лабораторная работа 2' },
    { id: 2, title: 'Лабораторная работа 3' },
  ]);

  const [selectedLab, setSelectedLab] = useState(null);

  const handleLabClick = (labId) => {
    setSelectedLab(labId);
  };

  const renderContent = () => {
    switch (selectedLab) {
      case 1:
        return <Button text={'Увеличить'}  />;
      case 2:
        return <Content />;
      default:
        return <p style={{padding: "20px"}}>Вы находитесь на третьей лабораторной</p>;
    }
  };

  return (
    <div className={'main-container'}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Menu labs={labs} onLabClick={handleLabClick} />
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
}

export default App;