import { createSlice } from '@reduxjs/toolkit';

type SettingsState = {
  isOpen: boolean;
};
const initialState: SettingsState = {
  isOpen: true,
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
