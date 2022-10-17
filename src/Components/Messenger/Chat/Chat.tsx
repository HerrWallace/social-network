import { Dialog } from '../Dialog/Dialog';
import styles from './Chat.module.css';

export const Chat = () => {
  return (
    <div className={styles.chat}>
      <Dialog />
    </div>
  );
};
