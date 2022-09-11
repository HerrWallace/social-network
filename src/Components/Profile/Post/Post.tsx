import styles from './Post.module.css';

export const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <div className={styles.name}>Name Sample</div>
        A lot of text to make the
        beautiful Post component and to choose right margin proportions. A lot
        of text to make the beautiful Post component and to choose right margin
        proportions.
        <p>
          A lot of text to make the beautiful Post component and to choose right
          margin proportions. A lot of text to make the beautiful Post component
          and to choose right margin proportions.
        </p>
        <p>
          A lot of text to make the beautiful Post component and to choose right
          margin proportions.
        </p>
      </div>
    </div>
  );
};
