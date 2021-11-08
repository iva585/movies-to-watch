import React, { useState } from 'react';
import styles from './Card.module.css';

type CardProps = {
  watched: boolean;
  title: string;
  info?: string;
  priority: string;
};

export default function Card({
  title,
  info,
  watched,
  priority,
}: CardProps): JSX.Element {
  const conditionalStyles = watched ? styles.watched : '';
  const [prio, setPrio] = useState(priority);

  return (
    <section className={`${styles.card} ${conditionalStyles}`}>
      <h2 className={styles.title}>{title}</h2>
      <p>{info}</p>
      <label>
        watched
        <input type="checkbox" />
      </label>
      <label className={styles.lable_priority} />
      Movie Rating &nbsp;
      <input
        type="number"
        value={prio}
        min={1}
        max={5}
        onChange={(event) => setPrio(event.target.value)}
      />
    </section>
  );
}
