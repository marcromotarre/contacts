import * as types from "./../constants";

export const logOut = () => ({
  type: types.LOG_OUT,
});

export const logIn = ({ token }) => ({
  type: types.LOG_IN,
  payload: token,
});
