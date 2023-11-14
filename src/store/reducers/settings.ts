import { createSlice } from '@reduxjs/toolkit';

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
  },
});
export const { toggleSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
