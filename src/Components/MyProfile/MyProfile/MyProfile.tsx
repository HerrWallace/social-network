import { ProfileImage } from '../ProfileImage/ProfileImage';
import style from './MyProfile.module.css'

export const MyProfile = () => {
  return (
    <div className={style.myProfile}>
      <ProfileImage />
    </div>
  )
};
