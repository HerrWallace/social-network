import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  id: string;
  name: string;
  lastMessage: string;
};

type MessengerState = {
  users: User[];
};

const initialState: MessengerState = {
  users: [
    {
      id: '2',
      name: 'Sigi',
      lastMessage: 'Hello!',
    },
    {
      id: '3',
      name: 'Carl',
      lastMessage: 'Hi',
    },
    {
      id: '4',
      name: 'Jordan',
      lastMessage: 'Good evening',
    },
    {
      id: '5',
      name: 'Joe',
      lastMessage: `You're invited`,
    },
    {
      id: '6',
      name: 'Matt',
      lastMessage: 'agreed',
    },
  ],
};

const messengerSlice = createSlice({
  name: 'messenger',
  initialState,
  reducers: {},
});

export const {} = messengerSlice.actions;
export default messengerSlice.reducer;
