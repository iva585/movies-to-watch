import React, {useState} from 'react';
import styles from './Form.module.css';

type FormProps = {
    onSubmit: (card: {
        title: string;
        info: string;
        watched: boolean;
    }) => void;
};

function Form({ onSubmit }: FormProps): JSX.Element {
    const [title, setTitle] = useState('');
    const [info, setInfo] = useState('');
  
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      onSubmit({ title, info, watched: false });
    }
  
    return (
      <form className={styles.form} onSubmit={(event) => handleSubmit(event)}>
        <label>
          Title:{''}
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label>
          Info:{''}
          <input
            value={info}
            onChange={(event) => setInfo(event.target.value)}
            type="text"
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }

export default Form;