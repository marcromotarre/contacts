import reducer from "../user";
import * as types from "./../../constants";

describe("user reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      user: {
        token: "",
        isLoggedIn: false,
      },
    });
  });

  it("log in", () => {
    expect(
      reducer(undefined, {
        type: types.LOG_IN,
        payload: { token: "test token" },
      })
    ).toEqual({
      user: {
        token: "test token",
        isLoggedIn: true,
      },
    });
  });

  it("log out", () => {
    expect(
      reducer(undefined, {
        type: types.LOG_OUT,
      })
    ).toEqual({
      user: {
        token: "",
        isLoggedIn: false,
      },
    });
  });
});
