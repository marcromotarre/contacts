import React from "react";
import { useUserStore } from "../../state/user";
import UsersList from "../components/UsersList";

const HomePage = () => {
  const isLoggedIn = useUserStore(state => state.isLoggedIn)
  return <div>{isLoggedIn && <UsersList />}</div>;
};
export default HomePage;
