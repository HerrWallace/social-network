import styles from './User.module.css';
import { NavLink } from 'react-router-dom';

type UserProps = {
  text: string;
  name: string;
  id: string;
};

export const User = ({ text, name, id }: UserProps) => {
  const path = '/messenger/' + id;
  return (
    <div className={styles.user}>
      <div className={styles.image} />
      <div className={styles.content}>
        <NavLink to={path}>{name}</NavLink>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};
