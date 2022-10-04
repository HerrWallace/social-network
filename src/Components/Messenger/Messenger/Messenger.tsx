import { User } from '../User/User';
import styles from './Messenger.module.css';

export const Messenger = () => {
  const text1 = 'adks;jfilhuhdkvbjsnlaj;sajfklgsfdkk';
  const text2 = 'fesrgdvxdczsas';
  const text3 = 'dsvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvdsvvvds';
  return (
    <div className={styles.messenger}>
      <div className={styles.users}>
        <User text={text1} />
        <User text={text2} />
        <User text={text3} />
      </div>
      <div className={styles.dialog}></div>
    </div>
  );
};
