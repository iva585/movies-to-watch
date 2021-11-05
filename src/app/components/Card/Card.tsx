import React from 'react';
import styles from './Card.module.css';

type CardProps = {
  watched: boolean;
  title: string;
  info?: string;
};

export default function Card({ title, info, watched }: CardProps): JSX.Element {
  const conditionalStyles = watched ? styles.watched : '';

  return (
    <section className={`${styles.card} ${conditionalStyles}`}>
      <h2 className={styles.title}>{title}</h2>
      <p>{info}</p>
      <label>
        watched
        <input type="checkbox" />
      </label>
    </section>
  );
}
