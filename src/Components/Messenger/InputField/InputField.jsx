import styles from './InputField.module.css';

export const InputField = () => {
  return (
    <div className={styles.inputField}>
      <textarea className={styles.input}></textarea>
    </div>
  );
};
