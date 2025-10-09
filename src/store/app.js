import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  snackbar: {
    maxSnack: 3,
    anchorOrigin: { vertical: 'top', horizontal: 'right' },
  },
  drawer: {
    anchor: 'right',
    top: { content: null, open: false },
    left: { content: null, open: false },
    bottom: { content: null, open: false },
    right: { content: null, open: false },
  },
  errors: [
    {
      id: 1,
      message: 'test',
      type: 'warning',
      hasRead: false,
      hasShown: false,
    },
  ],
  modal: {
    component: () => null,
    open: false,
    props: {},
  },
  notifications: [
    {
      id: 1,
      message: 'test',
      type: 'success',
      hasRead: false,
      hasShown: false,
    },
  ],
  settings: {
    loading: false,
    language: 'en',
  },
  theme: {
    palette: {
      mode: 'light', // light or dark
    },
    direction: 'ltr', // ltr or rtl
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSnackbar: (state, action) => {
      state.snackbar = action.payload;
    },
    setDrawer: (state, action) => {
      state.drawer = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    toggleModal: (state, action) => {
      state.modal.open = action.payload;
    },
    setModalComponent: (state, action) => {
      state.modal.component = action.payload;
    },
    setModalProps: (state, action) => {
      state.modal.props = action.payload;
    },
    toggleDrawer: (state, action) => {
      state.drawer[action.payload.anchor].open =
        !state.drawer[action.payload.anchor].open;
    },
    setDrawerContent: (state, action) => {
      state.drawer[action.payload.anchor].content = action.payload.content;
    },
    setDrawerAnchor: (state, action) => {
      state.drawer.anchor = action.payload;
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
    setSettings: (state, action) => {
      state.settings = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const {
  setSnackbar,
  setDrawer,
  setErrors,
  setModalComponent,
  setNotifications,
  setSettings,
  setTheme,
  toggleModal,
  setModalProps,
  toggleDrawer,
  setDrawerContent,
  setDrawerAnchor,
} = appSlice.actions;

export const appSnackbarSelector = (state) => state.app.snackbar;
export const appDrawerSelector = (state) => state.app.drawer;
export const appErrorsSelector = (state) => state.app.errors;
export const appModalSelector = (state) => state.app.modal;
export const appNotificationsSelector = (state) => state.app.notifications;
export const appSelector = (state) => state.app;
export const appSettingsSelector = (state) => state.app.settings;
export const appThemeSelector = (state) => state.app.theme;

export const selectDrawers = (state) => state.app.drawer;
export const selectDrawer = (anchor) => (state) => state.app.drawer[anchor];
export const selectDrawerContent = (anchor) => (state) =>
  state.app.drawer[anchor].content;
export const selectDrawerOpen = (anchor) => (state) =>
  state.app.drawer[anchor].open;
export const selectDrawerAnchor = (state) => state.app.drawer.anchor;

export const selectModal = (state) => state.app.modal;
export const selectModalComponent = (state) => state.app.modal.component;
export const selectModalProps = (state) => state.app.modal.props;
export const selectModalOpen = (state) => state.app.modal.open;

export default appSlice.reducer;
