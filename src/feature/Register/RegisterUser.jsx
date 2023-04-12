// Importing React
import React, { useState } from "react";

// Importing formik
import { Formik } from "formik";
import * as yup from "yup";

// Importing function
import { registerUser } from "../../api/auth/register";

// Importing MUI
import { TextField, Button, Checkbox, useTheme, Box, FormControlLabel } from "@mui/material";

const RegisterUser = () => {
 const [username, setUsername] = useState();
 const [avatar, setAvatar] = useState();
 const [manager, setManager] = useState();
 const [email, setEmail] = useState();
 const [password, setUserPassword] = useState();
 const [isChecked, setIsChecked] = useState(false);

 const theme = useTheme();

 const initialValues = {
  username: "",
  avatar: "",
  email: "",
  password: "",
 };

 // eslint-disable-next-line
 const emailRegEx = /^[\w\-.]+@(stud\.)?noroff\.no$/;

 const checkoutSchema = yup.object().shape({
  username: yup.string().min(3, "must be at least 3 characters long").required("Your name is missing"),
  avatar: yup.string().min(3, "The image url needs to end with jpg or png"),
  email: yup.string().email("invalid email").required("Required"),
  password: yup.string().min(8, "Password need to be 8 characters or more").required("Required"),
 });

 const formSubmit = async (e) => {
  e.preventDefault();

  const resp = await registerUser({ username, email, avatar, manager, password });

  if ("accessToken" in resp) {
   localStorage.setItem("ApiToken", resp["accessToken"]);
   localStorage.setItem("UserData", JSON.stringify(resp));
   window.location.href = "pages/profile";
  }
 };

 return (
  <>
   <Formik onSubmit={formSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
    {({ errors, touched, handleBlur, handleSubmit }) => (
     <form onSubmit={handleSubmit}>
      <TextField
       variant="standard"
       margin="normal"
       required
       fullWidth
       id="username"
       name="username"
       label="User name"
       type="text"
       sx={{ "& .MuiInputLabel-root": { color: theme.palette.mode === "dark" ? "#4cceac" : "#000914" } }}
       error={!!touched.username && !!errors.username}
       helperText={touched.username && errors.username}
       onBlur={handleBlur}
       onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
       variant="standard"
       margin="normal"
       required
       fullWidth
       id="avatar"
       name="avatar"
       label="Profile image"
       type="url"
       sx={{ "& .MuiInputLabel-root": { color: theme.palette.mode === "dark" ? "#4cceac" : "#000914" } }}
       error={!!touched.avatar && !!errors.avatar}
       helperText={touched.avatar && errors.avatar}
       onBlur={handleBlur}
       onChange={(e) => setAvatar(e.target.value)}
      />
      <TextField
       variant="standard"
       margin="normal"
       required
       fullWidth
       id="email"
       name="email"
       label="Email Address"
       type="email"
       sx={{ "& .MuiInputLabel-root": { color: theme.palette.mode === "dark" ? "#4cceac" : "#000914" } }}
       error={!!touched.email && !!errors.email}
       helperText={touched.email && errors.email}
       onBlur={handleBlur}
       onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
       variant="standard"
       margin="normal"
       required
       fullWidth
       id="password"
       name="password"
       label="Password"
       type="password"
       sx={{ "& .MuiInputLabel-root": { color: theme.palette.mode === "dark" ? "#4cceac" : "#000914" } }}
       error={!!touched.password && !!errors.password}
       helperText={touched.password && errors.password}
       onBlur={handleBlur}
       onChange={(e) => setUserPassword(e.target.value)}
      />
      <FormControlLabel control={<Checkbox onChange={(e) => setManager(console.log(e.target.checked))} />} label="Venue manager?" />

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
    )}
   </Formik>
  </>
 );
};

export default RegisterUser;
