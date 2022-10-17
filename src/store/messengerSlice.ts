import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  id: string;
  name: string;
  lastMessage: string;
};

type Message = {
  queueID: string;
  side: string;
  content: string;
}

export type Dialog = {
  dialogId: string;
  messages: Message[];
}

type MessengerState = {
  users: User[];
  dialog: Dialog[];
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
  dialog: [
    {
      dialogId: '2',
      messages: [
        {
          queueID: '1',
          side: 'left',
          content: 'Message one'
        },
        {
          queueID: '2',
          side: 'left',
          content: 'Message two'
        },
        {
          queueID: '3',
          side: 'left',
          content: 'Hello'
        },
      ] 
    },
    {
      dialogId: '3',
      messages: [
        {
          queueID: '1',
          side: 'left',
          content: 'Hi'
        },
      ] 
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
