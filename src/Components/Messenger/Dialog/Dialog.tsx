import { InputField } from '../InputField/InputField';
import { Message } from '../Message/Message';
import styles from './Dialog.module.css';

export const Dialog = () => {
  // read path, checking id,map
  return (
    <div className={styles.dialog}>
      <Message />
      <div className={styles.input}>
        <InputField />
      </div>
    </div>
  );
};
