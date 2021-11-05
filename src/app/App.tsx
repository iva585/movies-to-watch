import React, { useState } from 'react';
import styles from './App.module.css';
import Card from './components/Card/Card';
import Title from './components/Title/Title';
import Form from './components/Form/Form';

function App(): JSX.Element {
  const [cards, setCards] = useState([
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
  function handleSubmit(card: {
    title: string;
    info: string;
    watched: boolean;
  }) {
    const newCards = [...cards];
    newCards.push(card);
    setCards(newCards);
  }

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
    <div className={styles.body}>
      <Title>Movies to watch</Title>
      <div className={styles.appContainer}>
        <Form onSubmit={handleSubmit} />
        {renderCard(cards)}
      </div>
    </div>
  );
}

export default App;
