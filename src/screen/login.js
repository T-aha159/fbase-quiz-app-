import React, { useState } from "react";
import { Button, Divider, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { loginUser } from "../firebase/firebasemethod";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  let login = () => {
    loginUser({ email, password })
      .then((res) => {
        console.log(res);
        navigate(`/home/${res.userName}`,
          { state: res }
        );
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  let clickEv = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <div className="main">
          
          <p>LOGIN</p>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ pb: 2 }}>
                <TextField
                  label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  variant="standard"
                  sx={{ width: "90%" }}
                />
              </Box>
              <Box sx={{ pb: 2 }}>
                <TextField
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  variant="standard"
                  size="70"
                  sx={{ width: "90%" }}
                />
              </Box>
            </Box>
            <Box sx={{ p: 2 }}>
              <Button className="button" variant="contained" onClick={login} fullWidth>
                Sign Up
              </Button>
            </Box>
            <p>
              Need a member <span onClick={clickEv}>SIGNUP</span>
            </p>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Login;
