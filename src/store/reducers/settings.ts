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
    changeInputCredentialsValue: (
      state,
      action: PayloadAction<{
        // fieldName correspondra au nom du champ à modifier (email ou password)
        // keyof permet de récupérer la liste des propriétés d'un type
        fieldName: keyof SettingsState['credentials'];

        // value correspondra à la valeur à mettre dans le champ
        value: string;
      }>
    ) => {
      // state.credentials.email = action.payload;
      // state.credentials['email'] = action.payload;
      // const monChampAModifier = 'email';
      // state.credentials[monChampAModifier] = action.payload;
      // Je récupère depuis mon payload le nom du champ à modifier et sa valeur
      const { fieldName, value } = action.payload;
      state.credentials[fieldName] = value;
    },
  },
});
export const { toggleSettings, changeInputCredentialsValue } =
  settingsSlice.actions;
export default settingsSlice.reducer;
