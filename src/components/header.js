/** @jsxImportSource theme-ui */
import { Link } from "react-router-dom";
import logo from "../assets/alea-logo.gif"; // Tell webpack this JS file uses this image
import { useUserStore } from "../../state/user";

export default function Header() {
  const isLoggedIn = useUserStore(state => state.isLoggedIn)
  const logOut = useUserStore(state => state.logOut)

  const logout = () => {
    localStorage.removeItem("user");
    logOut()
  };

  return (
    <>
      <div
        sx={{
          width: "100%",
          height: "50px",
          position: "fixed",
          backgroundColor: "#fff",
          display: "grid",
          gridTemplateColumns: "10px 80px auto 80px 10px",
          gridTemplateAreas: `". . logo user ."`,
          justifyItems: "center",
          alignItems: "center",
          borderBottom: "1px solid #ff6801",
        }}
      >
        <Link sx={{ gridArea: "logo" }} to="/">
          <img
            sx={{ height: "45px", gridArea: "logo" }}
            src={logo}
            alt="Logo"
          ></img>
        </Link>
        {isLoggedIn && (
          <Link
            sx={{
              gridArea: "user",
              color: "white",
              backgroundColor: "#ff6801",
              border: "none",
              borderRadius: "3px",
              padding: "10px",
              fontFamily: "Quicksand",
              fontWeight: "200",
              fontSize: "12px",
            }}
            to="/"
            onClick={() => logout()}
          >
            Log out
          </Link>
        )}
        {!isLoggedIn && (
          <Link
            sx={{
              gridArea: "user",
              color: "white",
              backgroundColor: "#ff6801",
              border: "none",
              borderRadius: "3px",
              padding: "10px",
              fontFamily: "Quicksand",
              fontWeight: "200",
              fontSize: "12px",
            }}
            to="/login"
          >
            Log in
          </Link>
        )}
      </div>
      <div
        sx={{
          width: "100%",
          height: "50px",
          backgroundColor: "red",
        }}
      ></div>
    </>
  );
}
