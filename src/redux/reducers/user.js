import * as types from "./../constants";

export const initialState = {
  user: {
    token: "",
    isLoggedIn: false,
  },
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.LOG_IN:
      return {
        ...state,
        user: {
          token: payload.token,
          isLoggedIn: true,
        },
      };
    case types.LOG_OUT:
      return {
        ...state,
        user: {
          token: "",
          isLoggedIn: false,
        },
      };

    default:
      return {
        ...state,
      };
  }
}
