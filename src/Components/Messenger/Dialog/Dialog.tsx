import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';
import { InputField } from '../InputField/InputField';
import { Message } from '../Message/Message';
import styles from './Dialog.module.css';

export const Dialog = () => {
  const { id } = useParams();
  const dialogs = useAppSelector((state) => state.messenger.dialog);

  if (id === undefined) {
    return null;
  }

  const dialog = dialogs.filter((dialog) => {
    return dialog.dialogId === id;
  });

  if (dialog.length === 0) {
    return null;
  }

  const messageElements = dialog[0].messages.map((m) => (
    <Message content={m.content} key={m.queueID} />
  ));

  return (
    <>
      {messageElements}
      <div className={styles.input}>
        <InputField />
      </div>
    </>
  );
};

