import { useAppSelector } from '../../../hooks';
import { User } from '../User/User';
import styles from './Messenger.module.css';

export const Messenger = () => {
  const users = useAppSelector((state) => state.messenger.users);
  const userElements = users.map((u) => (
    <User text={u.lastMessage} name={u.name} id={u.id} />
  ));

  return (
    <div className={styles.messenger}>
      <div className={styles.users}>{userElements}</div>
      <div className={styles.dialog}></div>
    </div>
  );
};
