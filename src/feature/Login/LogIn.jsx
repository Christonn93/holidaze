// Importing React
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Importing function
import { loginUser } from "../../api/auth/logIn";

// Importing MUI
import { TextField, Button } from "@mui/material";

import AuthContext from "../../context/AuthProvider";
import { getProfile } from "../../api/auth/profile/profile";

const LogIn = () => {
 const [email, setEmail] = useState();
 const [password, setUserPassword] = useState();

 const auth = useContext(AuthContext);

 const navigate = useNavigate();

 const formSubmit = async (e) => {
  e.preventDefault();

  const resp = await loginUser({ email, password });

  if ("accessToken" in resp) {
   localStorage.setItem("ApiToken", resp["accessToken"]);
   localStorage.setItem("UserData", JSON.stringify(resp));
   localStorage.setItem("isLoggedIn", true);

   const profileCall = await getProfile();
   localStorage.setItem("UserData", JSON.stringify(profileCall));
   navigate("/profile");
  } else {
   alert("No user");
  }
 };

 return (
  <>
   <form noValidate onSubmit={formSubmit}>
    <TextField data-cy="email-input" variant="outlined" margin="normal" required fullWidth id="email" name="email" label="Email Address" onChange={(e) => setEmail(e.target.value)} />
    <TextField
     data-cy="password-input"
     variant="outlined"
     margin="normal"
     required
     fullWidth
     id="password"
     name="password"
     label="Password"
     type="password"
     onChange={(e) => setUserPassword(e.target.value)}
    />
    <Button
     type="submit"
     fullWidth
     variant="contained"
     color="primary"
     onClick={() => {
      auth.storeUserData();
     }}
     data-cy="login-button"
    >
     Sign In
    </Button>
   </form>
  </>
 );
};

export default LogIn;
