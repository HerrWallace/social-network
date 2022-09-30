import styles from './Post.module.css';

type PostProps = {
  text: string;
};

export const Post = ({ text }: PostProps) => {
  return (
    <div className={styles.post}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <div className={styles.name}>Name Sample</div>
        {text}
      </div>
    </div>
  );
};
