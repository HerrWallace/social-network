import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Post = {
  text: string;
  id?: string;
};

type ProfileState = {
  posts: Post[];
  newPostText: string;
};

const initialState: ProfileState = {
  posts: [
    {
      text: `A lot of text to make the beautiful Post component and to choose right margin proportions. A lot of text to make the beautiful Post component and to choose right margin proportions.
      A lot of text to make the beautiful Post component and to choose right margin proportions. A lot of text to make the beautiful Post component and to choose right margin proportions.
      A lot of text to make the beautiful Post component and to choose right margin proportions.`,
    },
    {
      text: `A lot of text to make the beautiful Post component and to choose right margin proportions. A lot of text to make the beautiful Post component and to choose right margin proportions.
      A lot of text to make the beautiful Post component and to choose right margin proportions. A lot of text to make the beautiful Post component and to choose right margin proportions.
      A lot of text to make the beautiful Post component and to choose right margin proportions.`,
    },
    {
      text: `A lot of text to make the beautiful Post component and to choose right margin proportions. A lot of text to make the beautiful Post component and to choose right margin proportions.
      A lot of text to make the beautiful Post component and to choose right margin proportions. A lot of text to make the beautiful Post component and to choose right margin proportions.
      A lot of text to make the beautiful Post component and to choose right margin proportions.`,
    },
  ],
  newPostText: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<string>) {
      console.log('add Post');
      state.posts.unshift({
        text: action.payload,
      });
      state.newPostText = '';
    },
    updateInputText(state, action: PayloadAction<string>) {
      console.log('update new post text');
      state.newPostText = action.payload;
    },
  },
});

export const { addPost, updateInputText } = profileSlice.actions;
export default profileSlice.reducer;
