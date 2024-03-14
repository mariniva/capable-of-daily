import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface DateState {
  weekDifference: number;
}

const initialState: DateState = {
  weekDifference: 0,
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setWeekDifference: (state, action: PayloadAction<"before" | "next"|"today">) => {
      if (action.payload === "before") {
        state.weekDifference -= 1;
      } else if (action.payload === "next") {
        state.weekDifference += 1;
      } else if (action.payload === "today") {
        state.weekDifference = 0;
      }
    },
  },
});

export const {setWeekDifference} = dateSlice.actions;
export const selectDate = (state: RootState) => state.date;
export default dateSlice.reducer;
