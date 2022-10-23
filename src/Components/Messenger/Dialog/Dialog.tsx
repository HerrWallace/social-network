import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';
import { useAppDispatch } from './../../../hooks';
import { sendMessage, updateInputText } from '../../../store/messengerSlice';
import { InputField } from '../InputField/InputField';
import { Message } from '../Message/Message';
import styles from './Dialog.module.css';

export const Dialog = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const dialogs = useAppSelector((state) => state.messenger.dialog);

  const newMessageText = useAppSelector((state) => state.messenger.newMessageText);

  // Choosing a dialog page

  if (id === undefined) {
    return null;
  }

  const dialog = [...dialogs].filter((dialog) => {
    return dialog.dialogId === id;
  });

  if (dialog.length === 0) {
    return null;
  }

  const messageElements = dialog[0].messages.map((m) => (
    <Message content={m.content} side={m.side} key={m.queueID} />
  ));

  // Actions

  const callSendMessage = (text: string) => {
    dispatch(sendMessage({ text, id }));
  };

  const callUpdateInputText = (text: string) => dispatch(updateInputText(text));

  return (
    <>
      <div className={styles.input}>
        <InputField
          inputValue={newMessageText}
          handleChange={callUpdateInputText}
          handleClick={callSendMessage}
        />
      </div>
      <div className={styles.messages}>{messageElements}</div>
    </>
  );
};
