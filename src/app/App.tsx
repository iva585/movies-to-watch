import React, { useState } from 'react';
import styles from './App.module.css';
import Card from './components/Card/Card';
import Title from './components/Title/Title';

function App(): JSX.Element {
  const [cards] = useState([
    {
      title: 'Titanic',
      info: 'romance/drama',
      watched: false,
    },
    {
      title: 'Godfather',
      info: 'best movie of all times',
      watched: true,
    },
  ]);
  
  function renderCard(
    cards: {
      title: string;
      info: string;
      watched: boolean;
    }[]
  ) {

    return cards.map((card) => {
      return (
        <Card
          key={card.title}
          title={card.title}
          info={card.info}
          watched={card.watched}
        />
      );
    });
  }








  return (
    <div className={styles.appContainer}>
      <Title>Movies to watch</Title>
      {/* <Form onSubmit={handleSubmit} /> */}
      {renderCard(cards)}
      </div>    
  )}

export default App;
