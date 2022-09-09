import { ProfileImage } from '../ProfileImage/ProfileImage';
import { ProfileInfo } from '../ProfileInfo/ProfileInfo';
import styles from './MyProfile.module.css';

export const MyProfile = () => {
  return (
    <div className={styles.myProfile}>
      <ProfileImage />
      <div className={styles.stream}>
        <ProfileInfo />
      </div>
    </div>
  );
};
