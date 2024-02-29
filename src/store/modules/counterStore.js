import { createSlice } from "@reduxjs/toolkit";
const counterStore = createSlice({
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
  },
});
const { increment, decrement } = counterStore.actions;
const counterReducer = counterStore.reducer;
export { increment, decrement };
export default counterStore;
