import { useAppSelector } from '../../../hooks';
import { addPost, updateInputText } from '../../../store/profileSlice';
import { Post } from '../Post/Post';
import { ProfileInput } from '../ProfileInput/ProfileInput';
import { useAppDispatch } from './../../../hooks';

export const ProfilePosts = () => {
  const posts = useAppSelector((state) => state.profile.posts);
  const newPostText = useAppSelector((state) => state.profile.newPostText);
  const postElements = posts.map((post) => <Post text={post.text} />);
  const dispatch = useAppDispatch();

  const callUpdateInputText = (text: string) => {
    dispatch(updateInputText(text));
  };

  const callAddPost = (text: string) => {
    dispatch(addPost(text));
  };

  return (
    <>
      <ProfileInput
        inputValue={newPostText}
        handleInput={callUpdateInputText}
        handleSubmit={callAddPost}
      />
      {postElements}
    </>
  );
};
