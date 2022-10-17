import styles from './Message.module.css';

type MessageProps = {
  content: string;
};

export const Message = ({ content }: MessageProps) => {
  return <div className={styles.message}>{content}</div>;
};
