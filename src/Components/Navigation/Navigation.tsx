import style from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div className={style.navigation}>
      <NavLink to='/profile' className={style.item}>
        Profile
      </NavLink>
      <NavLink to='/messenger' className={style.item}>
        Messenger
      </NavLink>
    </div>
  );
};
