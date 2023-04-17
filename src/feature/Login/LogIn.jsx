// Importing React
import React, { useState } from "react";

// Importing function
import { loginUser } from "../../api/auth/logIn";

// Importing MUI
import { TextField, Button } from "@mui/material";

const LogIn = () => {
 const [email, setEmail] = useState();
 const [password, setUserPassword] = useState();

 const formSubmit = async (e) => {
  e.preventDefault();

  const resp = await loginUser({ email, password });

  if ("accessToken" in resp) {
   localStorage.setItem("ApiToken", resp["accessToken"]);
   localStorage.setItem("UserData", JSON.stringify(resp));
   this.props.history.push('/profile');
  }
 };

 return (
  <>
   <form noValidate onSubmit={formSubmit}>
    <TextField variant="outlined" margin="normal" required fullWidth id="email" name="email" label="Email Address" onChange={(e) => setEmail(e.target.value)} />
    <TextField variant="outlined" margin="normal" required fullWidth id="password" name="password" label="Password" type="password" onChange={(e) => setUserPassword(e.target.value)} />
    <Button type="submit" fullWidth variant="contained" color="primary">
     Sign In
    </Button>
   </form>
  </>
 );
};

export default LogIn;
