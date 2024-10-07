import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type typeMove = string | "start";
type typeDirectionMotion = "+" | "-" | "";
type typePositionActiveDot = {
  x: number;
  y: number;
};

type TypeState = {
  activePage: number;
  move: typeMove;
  plusDegRotation: number;
  positionActiveDot: typePositionActiveDot;
  directionMotion: typeDirectionMotion;
};

const initialState: TypeState = {
  activePage: 1,
  move: "start",
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
    setMove(state, action: PayloadAction<typeMove>) {
      state.move = action.payload;
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
  setMove,
  setPlusRotation,
  setPosition,
  setDirectionMotion,
} = projectSlice.actions;

export default projectSlice.reducer;
