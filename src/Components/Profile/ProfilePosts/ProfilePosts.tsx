import styles from './ProfilePosts.module.css';

export const ProfilePosts = () => {
  return (
    <>
      <textarea className={styles.textarea} />
      <button className={styles.button}>Add post</button>
    </>
  );
};
