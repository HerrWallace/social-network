import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <NavLink to='/profile' className={styles.item}>
        Profile
      </NavLink>
      <NavLink to='/messenger' className={styles.item}>
        Messenger
      </NavLink>
    </div>
  );
};
