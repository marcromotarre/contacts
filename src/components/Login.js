/** @jsxImportSource theme-ui */

import { useState } from "react";
import { login } from "../lib/mutations";
import Input from "./common/input";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../state/user";
// "email": "eve.holt@reqres.in",
const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const logIn = useUserStore(state => state.logIn)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const user = await login({ email, password });
    localStorage.setItem("user", JSON.stringify(user));
    logIn(user.token)
    setIsLoading(false);
    navigate("/");
  };

  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        height: "80%",
      }}
    >
      <form
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          display: "grid",
          rowGap: "30px",
        }}
      >
        <div>
          <Input
            onChange={(value) => setEmail(value)}
            styles={{ width: "100%" }}
            type="text"
            text="username"
            defaultValue={email}
          />
          <Input
            onChange={(value) => setPassword(value)}
            styles={{ width: "100%" }}
            type="text"
            text="password"
          />
        </div>

        <input
          sx={{
            color: "white",
            backgroundColor: "#ff6801",
            border: "none",
            borderRadius: "3px",
            padding: "10px",
            fontFamily: "Quicksand",
            fontWeight: "200",
            fontSize: "16px",
          }}
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;
