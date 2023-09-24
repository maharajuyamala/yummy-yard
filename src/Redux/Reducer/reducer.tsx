import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  food: {},
};

const foodReducer: any = createSlice({
  name: "food",
  initialState: intialState,
  reducers: {
    FOOD: (state: any, action: any) => {
      state.food = action.payload;
    },
  },
});

export const foodActions = foodReducer.actions;
export default foodReducer.reducer;
