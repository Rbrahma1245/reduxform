import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  userList: [],
};
const LoginReducer = createSlice({
  name: "loginForm",
  initialState,

  //ACTIONS
  reducers: {
    addUser: (state, action) => {
      let { id, username, password } = action.payload;

      state.user = { id, username, password };
      state.userList.push({ id, username, password });
    },
    deleteUser: (state) => {
      state.user = {};
    },
  },
});

export const { addUser, deleteUser } = LoginReducer.actions;
export default LoginReducer.reducer;
