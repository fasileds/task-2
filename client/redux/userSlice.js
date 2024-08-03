import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    isLogedIn: !!localStorage.getItem("token"),
  },
  reducers: {
    logInStart: (state) => {
      state.isFaching = true;
    },
    logInSuccess: (state, action) => {
      state.isFaching = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogedIn = true;

      // Save to localStorage
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },
    logOut: (state) => {
      state.user = {};
      state.token = "";
      state.isLogedIn = false;

      // Remove from localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const { logInStart, logInSuccess, logOut } = userSlice.actions;
export default userSlice.reducer;
