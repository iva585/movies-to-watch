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
      priority: '5',
    },
    {
      title: 'Godfather',
      info: 'best movie of all times',
      watched: true,
      priority: '4',
    },
  ]);
  function handleSubmit(card: {
    title: string;
    info: string;
    watched: boolean;
    priority: string;
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
      priority: string;
    }[]
  ) {
    return cards.map((card) => {
      return (
        <Card
          key={card.title}
          title={card.title}
          info={card.info}
          watched={card.watched}
          priority={card.priority}
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
