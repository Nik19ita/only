import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type typeMove = string | "";
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
  moveBoolean: boolean;
};

const initialState: TypeState = {
  activePage: 1,
  move: "",
  plusDegRotation: 0,
  positionActiveDot: {
    y: 0,
    x: 0,
  },
  directionMotion: "",
  moveBoolean: true,
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
    setMoveBoolean(state, action: PayloadAction<boolean>) {
      state.moveBoolean = action.payload;
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
  setMoveBoolean,
} = projectSlice.actions;

export default projectSlice.reducer;
