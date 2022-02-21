import create from "zustand";

type UserState = {
  token: string;
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
};

export const useUserStore = create((set) => ({
  token: "",
  isLoggedIn: false,
  logIn: (token) => set({ token: token, isLoggedIn: true }),
  logOut: () => set({ token: "", isLoggedIn: false }),
}));

export { useUserStore };
