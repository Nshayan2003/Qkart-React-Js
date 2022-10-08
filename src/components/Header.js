import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { useHistory, Link } from "react-router-dom";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("balance");
    history.push("/");
    window.location.reload();
  };
  if (hasHiddenAuthButtons) {
    return (
      <Box className="header">
        <Box className="header-title">
          <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {children}
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          href="/"
        >
          Back to explore
        </Button>
      </Box>
    );
  }
  return (
    <Box className="header">
      <Box className="header-title">
        <img src="logo_light.svg" alt="QKart-icon"></img>
      </Box>
      {children}
      <Stack direction="row" spacing={1} alignItems="centre">
        {localStorage.getItem("username") ? (
          <>
            <Avatar
              src="avatar.png"
              alt={localStorage.getItem("username") || "profile"}
            />
            <p className="username-text">{localStorage.getItem("username")}</p>
            <Button type="primary" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button href="/login">Login</Button>
            <Button variant="contained" href="/register">
              Register
            </Button>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Header; /*
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";

const Header = ({ children, hasHiddenAuthButtons = false }) => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };

  return (
    <Box className="header">
      <Box className="header-title">
        <img src="logo_light.svg" alt="QKart-icon"></img>
      </Box>
      {hasHiddenAuthButtons ? (
        <Link className="link" to="/">
          <Button
            className="explore-button"
            startIcon={<ArrowBackIcon />}
            variant="text"
            to="/"
          >
            Back to explore
          </Button>
        </Link>
      ) : (
        <>
          {localStorage.getItem("token") ? (
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "1em",
                }}
              >
                <Avatar
                  src="public/avatar.png"
                  alt={localStorage.getItem("username")}
                />
                <p style={{ marginLeft: "0.5em" }}>
                  {localStorage.getItem("username")}
                </p>
              </div>
              <Button onClick={handleLogout}>LOGOUT</Button>
            </div>
          ) : (
            <div>
              <Link className="link" to="/login">
                <Button name="login">LOGIN</Button>
              </Link>
              <Link className="link" style={{ color: "#ffff" }} to="/register">
                <Button name="register" variant="contained">
                  REGISTER
                </Button>
              </Link>
            </div>
          )}
        </>
      )}
    </Box>
  );
};

export default Header;*/
