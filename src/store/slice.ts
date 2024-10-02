import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type typeMove = string | null;
type typeDirectionMotion = "+" | "-" | "";
type typePosition = {
  x: number;
  y: number;
};

type TypeState = {
  numberPages: number;
  move: typeMove;
  plusRotation: number;
  position: typePosition;
  directionMotion: typeDirectionMotion;
};

const initialState: TypeState = {
  numberPages: 1,
  move: null,
  plusRotation: 0,
  position: {
    x: 0,
    y: 0,
  },
  directionMotion: "",
};

const projectSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setNumberPages(state, action: PayloadAction<number>) {
      state.numberPages = action.payload;
    },
    setMove(state, action: PayloadAction<typeMove>) {
      state.move = action.payload;
    },
    setPlusRotation(state, action: PayloadAction<number>) {
      state.plusRotation = action.payload;
    },
    setPosition(state, action: PayloadAction<typePosition>) {
      state.position = action.payload;
    },
    setDirectionMotion(state, action: PayloadAction<typeDirectionMotion>) {
      state.directionMotion = action.payload;
    },
  },
});

export const {
  setNumberPages,
  setMove,
  setPlusRotation,
  setPosition,
  setDirectionMotion,
} = projectSlice.actions;

export default projectSlice.reducer;
