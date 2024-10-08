import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type typeDirectionMotion = "+" | "-" | "";
type typePositionActiveDot = {
  x: number;
  y: number;
};

type TypeState = {
  activePage: number;
  plusDegRotation: number;
  positionActiveDot: typePositionActiveDot;
  directionMotion: typeDirectionMotion;
};

const initialState: TypeState = {
  activePage: 1,
  plusDegRotation: 0,
  positionActiveDot: {
    y: 0,
    x: 0,
  },
  directionMotion: "",
};

const projectSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setActivePages(state, action: PayloadAction<number>) {
      state.activePage = action.payload;
    },
    setPlusRotation(state, action: PayloadAction<number>) {
      state.plusDegRotation = action.payload;
    },
    setPosition(state, action: PayloadAction<typePositionActiveDot>) {
      state.positionActiveDot = action.payload;
    },
    setDirectionMotion(state, action: PayloadAction<typeDirectionMotion>) {
      state.directionMotion = action.payload;
    },
  },
});

export const {
  setActivePages,
  setPlusRotation,
  setPosition,
  setDirectionMotion,
} = projectSlice.actions;

export default projectSlice.reducer;
