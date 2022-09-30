import styles from './ProfileInput.module.css';

type InputFieldProps = {
  inputValue: string;
  handleInput(text: string): void;
  handleSubmit(text: string): void;
};

export const ProfileInput = ({
  inputValue,
  handleInput,
  handleSubmit,
}: InputFieldProps) => {
  return (
    <>
      <textarea
        className={styles.textarea}
        value={inputValue}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button className={styles.button} onClick={() => handleSubmit(inputValue)}>
        Add post
      </button>
    </>
  );
};
