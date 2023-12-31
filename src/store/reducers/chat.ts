import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Message = {
  id: string;
  author: string;
  content: string;
};

type ChatState = {
  messages: Message[];
  inputValue: string;
};

const initialState: ChatState = {
  messages: [
    { id: crypto.randomUUID(), author: 'moi', content: 'hello ca va ?' },
    { id: crypto.randomUUID(), author: 'moundir', content: 'BOF' },
    {
      id: crypto.randomUUID(),
      author: 'Denis',
      content: 'HA !',
    },
    { id: crypto.randomUUID(), author: 'moi', content: 'ok' },
  ],
  inputValue: 'Hey Cow Boy!',
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    changeInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    addNewMessage(state) {
      const newMessage = {
        id: crypto.randomUUID(),
        author: 'moi',
        content: state.inputValue,
      };
      state.messages.push(newMessage);
      state.inputValue = '';
    },
  },
});
export const { changeInputValue, addNewMessage } = chatSlice.actions;
export default chatSlice.reducer;
