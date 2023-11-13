import { createSlice } from '@reduxjs/toolkit';

type Message = {
  id: string;
  author: string;
  content: string;
};

type ChatState = {
  messages: Message[];
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
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
});

export default chatSlice.reducer;
