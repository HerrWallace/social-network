import styles from './InputField.module.css';
import { SendButton } from './SendButton';

type InputFieldProps = {
  inputValue: string;
  handleChange(text: string): void;
  handleClick(text: string): void;
};

export const InputField = ({
  inputValue,
  handleChange,
  handleClick,
}: InputFieldProps) => {
  return (
    <div className={styles.inputField}>
      <textarea
        className={styles.input}
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      ></textarea>
      <button className={styles.sendButton} onClick={() => handleClick(inputValue)}>
        <SendButton />
      </button>
    </div>
  );
};
