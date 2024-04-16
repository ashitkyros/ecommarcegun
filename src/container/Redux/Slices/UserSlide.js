import { createSlice, nenoid } from "@reduxjs/toolkit";
const initialState = {
  user: [{ id: 1, title: "hello" }],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.user.push(action.payload);
    },
  },
});

export const { addData } = userSlice.actions;
export default userSlice.reducer;