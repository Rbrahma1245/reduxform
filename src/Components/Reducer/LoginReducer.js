import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  userDetails : [],
  userList: [],
};
const LoginReducer = createSlice({
  name: "loginForm",
  initialState,

  //ACTIONS
  reducers: {
    addUser: (state, action) => {
      let { id, userName, password } = action.payload;

      state.user = { id, userName, password };
      state.userList.push({ id, userName, password });
    },
   
    addUserDetails: (state, action)=>{
      let {firstName,middleName, lastName, email, phoneNumber, country, address }= action.payload
      state.userDetails.push({firstName,middleName, lastName, email, phoneNumber, country, address })
    },
    deleteUserDetails: (state, action) => {
      let {firstName,middleName, lastName, email, phoneNumber, country, address }= action.payload
      console.log(phoneNumber);

      let updatedList = state.userDetails.filter((e,i)=> e.phoneNumber !== phoneNumber)
      state.userDetails = updatedList
 
    },
  },
});

export const { addUser, deleteUser,addUserDetails,deleteUserDetails } = LoginReducer.actions;
export default LoginReducer.reducer;
