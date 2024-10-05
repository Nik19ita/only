import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type typeMove = string | null;
type typeDirectionMotion = "+" | "-" | "";

type TypeState = {
  activePage: number;
  move: typeMove;
  plusDegRotation: number;
  positionX: number;
  directionMotion: typeDirectionMotion;
  moveBoolean: boolean;
};

const initialState: TypeState = {
  activePage: 1,
  move: null,
  plusDegRotation: 0,
  positionX: 0,
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
    setPosition(state, action: PayloadAction<number>) {
      state.positionX = action.payload;
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
