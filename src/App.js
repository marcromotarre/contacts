/** @jsxImportSource theme-ui */

import { StrictMode, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import ZustandPage from "./pages/zustand";
import NotFoundPage from "./pages/404";
import Header from "./components/header";
import store from "./redux/store";
import { Provider, useDispatch } from "react-redux";
import * as actions from "./redux/actions/user";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(actions.logIn({ token: user.token }));
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="zustand" element={<ZustandPage />} />
          <Route path="*" exact={true} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById("root")
);
