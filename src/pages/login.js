/** @jsxImportSource theme-ui */
import React from "react";
import Login from "../components/Login";

const LoginPage = () => (
  <div>
    <div
      sx={{
        width: "100vw",
        height: "calc(100vh - 50px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Login></Login>
    </div>
  </div>
);

export default LoginPage;
