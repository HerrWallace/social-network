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
};

export type Dialog = {
  dialogId: string;
  messages: Message[];
};

type MessengerState = {
  users: User[];
  dialog: Dialog[];
  newMessageText: string;
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
          queueID: '3',
          side: 'right',
          content: 'Hello',
        },
        {
          queueID: '2',
          side: 'left',
          content: 'Message two',
        },
        {
          queueID: '1',
          side: 'left',
          content: 'Message one',
        },
      ],
    },
    {
      dialogId: '3',
      messages: [
        {
          queueID: '1',
          side: 'left',
          content: 'Hi',
        },
      ],
    },
  ],
  newMessageText: '',
};

const messengerSlice = createSlice({
  name: 'messenger',
  initialState,
  reducers: {
    sendMessage(state, action: PayloadAction<{ id: string; text: string }>) {
      let arrayNumber = 0;

      for (let i = 0; i < state.dialog.length; i++) {
        if (state.dialog[i].dialogId === action.payload.id) {
          arrayNumber = i;
          break;
        }
      }

      if (action.payload.text) {
        let queue = state.dialog[arrayNumber].messages.length + 1;
        state.dialog[arrayNumber].messages.unshift({
          queueID: String(queue),
          side: 'right',
          content: action.payload.text,
        });
        state.newMessageText = '';
      }
    },
    updateInputText(state, action: PayloadAction<string>) {
      state.newMessageText = action.payload;
    },
  },
});

export const { sendMessage, updateInputText } = messengerSlice.actions;
export default messengerSlice.reducer;
