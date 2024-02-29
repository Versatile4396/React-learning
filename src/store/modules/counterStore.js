import { createSlice } from "@reduxjs/toolkit";
const counterStore = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    adToNum(state, action) {
      state.count = action.payload;
    },
  },
});
const { increment, decrement, adToNum } = counterStore.actions;
const counterReducer = counterStore.reducer;
export { increment, decrement, adToNum };
export default counterReducer;
