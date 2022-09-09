import styles from './ProfileInfo.module.css';

export const ProfileInfo = () => {
  return (
    <div className={styles.profileInfo}>
      <div className={styles.profileName}>Name Sample</div>
      <p>Date: Sample</p>

      <p>City: Sample</p>

      <p>Education: Sample</p>

      <p>Web site: Sample</p>
    </div>
  );
};
