/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface WindowState {
  error: any;
  loading: boolean;
  loadingScreen: boolean;
  logged: boolean;
  isDemo: boolean;
  isDeveloperMode: boolean;
}

const initialState: WindowState = {
  error: undefined,
  loading: false,
  loadingScreen: false,
  logged: false,
  isDemo: false,
  isDeveloperMode: false,
};

export const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
    setIsDemo: (state, action: PayloadAction<any>) => {
      state.isDemo = action.payload;
    },
    setIsDeveloperMode: (state, action: PayloadAction<any>) => {
      state.isDeveloperMode = action.payload;
    },
    setLoading: (state, action: PayloadAction<any>) => {
      state.loading = action.payload;
    },
    setLoadingScreen: (state, action: PayloadAction<any>) => {
      state.loadingScreen = action.payload;
    },
    setLogged: (state, action: PayloadAction<any>) => {
      state.logged = action.payload;
    },
  },
});

export const {
  setError,
  setIsDemo,
  setIsDeveloperMode,
  setLoading,
  setLoadingScreen,
  setLogged,
} = windowSlice.actions;

export const selectError = (state: RootState) => state.window.error;
export const selectIsDemo = (state: RootState) => state.window.isDemo;
export const selectIsDeveloperMode = (state: RootState) =>
  state.window.isDeveloperMode;
export const selectLoading = (state: RootState) => state.window.loading;
export const selectLoadingScreen = (state: RootState) =>
  state.window.loadingScreen;
export const selectLogged = (state: RootState) => state.window.logged;

export default windowSlice.reducer;
