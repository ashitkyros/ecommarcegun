import { createSlice, nenoid } from "@reduxjs/toolkit";
const initialState = {
  products: [{ id: 1, price: 123 }],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addData: (state, action) => {
        console.log(state,"state")
        console.log(action,"action")
    },
  },
});

export const { addData } = userSlice.actions;
export default userSlice.reducer;