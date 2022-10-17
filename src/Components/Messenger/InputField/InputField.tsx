import styles from './InputField.module.css';
import { SendButton } from './SendButton';

export const InputField = () => {
  return (
    <div className={styles.inputField}>
      <textarea className={styles.input}></textarea>
      <button className={styles.sendButton}>
        <SendButton />
      </button>
    </div>
  );
};
