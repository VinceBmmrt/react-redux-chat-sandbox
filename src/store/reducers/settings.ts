import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SettingsState = {
  isOpen: boolean;
  credentials: {
    email: string;
    password: string;
  };
};
const initialState: SettingsState = {
  isOpen: true,
  credentials: {
    email: 'toto@toto.com',
    password: 'tata',
  },
};
const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleSettings: (state) => {
      state.isOpen = !state.isOpen;
    },
    changeInputValue: (state, action: PayloadAction<string>) => {
      state.credentials.email = action.payload;
    },
  },
});
export const { toggleSettings, changeInputValue } = settingsSlice.actions;
export default settingsSlice.reducer;
