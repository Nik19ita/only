import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type typeMove = string | null;
type typeDirectionMotion = "+" | "-" | "";

type TypeState = {
  activePage: number;
  move: typeMove;
  plusRotation: number;
  positionX: number;
  directionMotion: typeDirectionMotion;
};

const initialState: TypeState = {
  activePage: 1,
  move: null,
  plusRotation: 0,
  positionX: 0,
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
      state.plusRotation = action.payload;
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
} = projectSlice.actions;

export default projectSlice.reducer;
