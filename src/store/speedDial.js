import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  hidden: true,
  direction: 'left',
  actions: [],
};

export const speedDialSlice = createSlice({
  name: 'speedDial',
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setHidden: (state, action) => {
      state.hidden = action.payload;
    },
    setDirection: (state, action) => {
      state.direction = action.payload;
    },
    setActions: (state, action) => {
      state.actions = action.payload;
    },
  },
});

export const { setOpen, setHidden, setDirection, setActions } =
  speedDialSlice.actions;

export const selectSpeedDial = (state) => state.speedDial;

export default speedDialSlice.reducer;
