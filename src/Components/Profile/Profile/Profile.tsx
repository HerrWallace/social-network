import { ProfilePosts } from '../ProfilePosts/ProfilePosts';
import { ProfileImage } from '../ProfileImage/ProfileImage';
import { ProfileInfo } from '../ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <ProfileImage />
      <div className={styles.stream}>
        <ProfileInfo />
        <ProfilePosts />
      </div>
    </div>
  );
};
