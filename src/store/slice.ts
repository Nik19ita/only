import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type typeMove = string | null;

type TypeState = {
  numberPages: number;
  move: typeMove;
  plusRotation: number;
};

const initialState: TypeState = {
  numberPages: 1,
  move: null,
  plusRotation: 0,
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
  },
});

export const { setNumberPages, setMove, setPlusRotation } =
  projectSlice.actions;

export default projectSlice.reducer;
