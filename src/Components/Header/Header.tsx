import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Mojo</div>
        <div className={styles.nav}></div>
      </div>
    </div>
  );
};
