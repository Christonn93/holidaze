// Importing React
import React, { useState } from "react";

// Importing function
import { registerUser } from "../../api/auth/register";

// Importing MUI
import { TextField, Button, Checkbox, useTheme, Box, FormControlLabel } from "@mui/material";

const RegisterUser = () => {
 const [name, setUsername] = useState();
 const [avatar, setAvatar] = useState("");
 const [manager, setManager] = useState(false);
 const [email, setEmail] = useState();
 const [password, setUserPassword] = useState();
 const [isChecked, setIsChecked] = useState(false);

 const theme = useTheme();

 const formSubmit = async (e) => {
  e.preventDefault();

  const resp = await registerUser({ name, email, avatar, manager, password });

  if ("accessToken" in resp) {
   localStorage.setItem("ApiToken", resp["accessToken"]);
   localStorage.setItem("UserData", JSON.stringify(resp));
   alert("User registration success, You can now log in");
  }
 };

 return (
  <>
   <form onSubmit={formSubmit}>
    <TextField
     variant="standard"
     margin="normal"
     fullWidth
     id="username"
     name="name"
     label="User name"
     type="text"
     sx={{ "& .MuiInputLabel-root": { color: theme.palette.mode === "dark" ? "#4cceac" : "#000914" } }}
     onChange={(e) => {
      setUsername(e.target.value);
     }}
    />
    <TextField
     variant="standard"
     margin="normal"
     fullWidth
     id="avatar"
     name="avatar"
     label="Profile image"
     type="url"
     sx={{ "& .MuiInputLabel-root": { color: theme.palette.mode === "dark" ? "#4cceac" : "#000914" } }}
     onChange={(e) => setAvatar(e.target.value)}
    />
    <TextField
     variant="standard"
     margin="normal"
     fullWidth
     id="email"
     name="email"
     label="Email Address"
     type="email"
     sx={{ "& .MuiInputLabel-root": { color: theme.palette.mode === "dark" ? "#4cceac" : "#000914" } }}
     onChange={(e) => setEmail(e.target.value)}
    />
    <TextField
     variant="standard"
     margin="normal"
     fullWidth
     id="password"
     name="password"
     label="Password"
     type="password"
     sx={{ "& .MuiInputLabel-root": { color: theme.palette.mode === "dark" ? "#4cceac" : "#000914" } }}
     onChange={(e) => setUserPassword(e.target.value)}
    />
    <FormControlLabel control={<Checkbox onChange={(e) => setManager(e.target.checked)} sx={{ color: theme.palette.mode === "dark" ? "#4cceac" : "#000914" }} />} label="Venue manager?" />

    <Box display="flex" justifyContent="end" mt="20px">
     <FormControlLabel
      control={<Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} sx={{ color: theme.palette.mode === "dark" ? "#4cceac" : "#000914" }} />}
      label="By sending this form I agree til the terms of use"
     />
    </Box>
    <Button type="submit" fullWidth variant="contained" color="primary" disabled={!isChecked}>
     Register new user!
    </Button>
   </form>
  </>
 );
};

export default RegisterUser;

// TODO
/*
Need to add validation on this form. 
The form is working, but is missing validation.
*/
