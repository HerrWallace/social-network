import styles from './ProfileInfo.module.css';

export const ProfileInfo = () => {
  return (
    <div className={styles.info}>
      <div className={styles.name}>Name Sample</div>
      <p>Date: Sample</p>

      <p>City: Sample</p>

      <p>Education: Sample</p>
    </div>
  );
};
