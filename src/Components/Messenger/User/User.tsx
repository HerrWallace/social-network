import styles from './User.module.css';
import { NavLink } from 'react-router-dom';

type UserProps = {
  text: string;
};

export const User = ({ text }: UserProps) => {
  const path = '/messenger/' + 'id'; // props.id
  return (
    <div className={styles.user}>
      <div className={styles.image} />
      <div className={styles.content}>
        <NavLink to={path}>Name</NavLink>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};
