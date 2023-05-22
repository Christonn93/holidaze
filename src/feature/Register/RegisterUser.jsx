// Importing React
import React, { useState } from "react";

// Importing formik
import { Formik } from "formik";
import * as yup from "yup";

// Importing function
import { registerUser } from "../../api/auth/register";

// Importing MUI
import { TextField, Button, Checkbox, useTheme, Box, FormControlLabel } from "@mui/material";

// Importing components
import UiFeedback from "../../components/UiFeedback/UiFeedback";

const RegisterUser = () => {
 const [name, setUsername] = useState();
 const [avatar, setAvatar] = useState();
 const [manager, setManager] = useState(false);
 const [email, setEmail] = useState();
 const [emailIsNoroff, setNoroffEmail] = useState(false);
 const [password, setPassword] = useState();
 const [isChecked, setIsChecked] = useState(false);
 const [registerStatus, setRegisterStatus] = useState(true);
 const [responseMessage, setResponseMessage] = useState("");
 const [responseCode, setResponseCode] = useState("");

 const theme = useTheme();

 const formSubmit = async () => {
  const resp = await registerUser({ name, email, avatar, manager, password });

  if ("accessToken" in resp) {
   localStorage.setItem("ApiToken", resp["accessToken"]);
   localStorage.setItem("UserData", JSON.stringify(resp));
   alert("User registration success, You can now log in");
  } else {
   setRegisterStatus(false);
   setResponseMessage(resp.errors[0].message);
   setResponseCode(resp.statusCode);
  }
 };

 const initialValues = {
  name: "",
  avatar: "",
  email: "",
  password: "",
  venueManager: "",
 };

 // RegEx values
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 const imageUrlRegex = /\.(jpeg|jpg|gif|png|svg|webp)$/i;

 const checkoutSchema = yup.object().shape({
  name: yup.string().min(3, "must be at least 3 characters long").required("Username is missing"),
  email: yup.string().min(3, "must be at least 3 characters long").matches(emailRegex, "The email must be a valid email").email("invalid email").required("Email is missing"),
  avatar: yup.string().min(3, "must be at least 3 characters long").matches(imageUrlRegex, "The image must be a valid url").url("invalid url"),
  password: yup.string().min(3, "must be at least 3 characters long").required("Password is missing"),
 });

 const handleInputEmail = (e, setFieldValue) => {
  const value = e.target.value;
  setEmail(value);
  setFieldValue("email", value, false);
  // console.log(inputValue);
  const regex = /\w+([-+.]\w+)*@(stud\.)?noroff\.no/;
  if (value.match(regex)) {
   setNoroffEmail(true);
  } else {
   setNoroffEmail(false);
  }
 };

 const handleInputName = (e, setFieldValue) => {
  const value = e.target.value;
  setUsername(value);
  setFieldValue("name", value, false);
 };

 const handleInputAvatar = (e, setFieldValue) => {
  const value = e.target.value;
  setAvatar(value);
  setFieldValue("avatar", value, false);
 };

 const handleInputPassword = (e, setFieldValue) => {
  const value = e.target.value;
  setPassword(value);
  setFieldValue("password", value, false);
 };

 const handleManagerChecked = (e, setFieldValue) => {
  const value = e.target.value;
  setManager(e.target.checked);
  setFieldValue("venueManager", value, false);
 };

 return (
  <>
   {!registerStatus ? (
    <>
     <Box marginTop={2} marginBottom={2}>
      <UiFeedback severity={"error"} title={"Error" + " " + responseCode} message={responseMessage + "." + " " + "Please try again"} />
     </Box>
    </>
   ) : (
    <></>
   )}
   <Formik onSubmit={formSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
    {({ values, errors, touched, handleBlur, handleSubmit, setFieldValue }) => (
     <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
       display: "flex",
       flexDirection: "column",
       gap: 2,
      }}
     >
      <TextField
       variant="outlined"
       margin="normal"
       fullWidth
       id="username"
       name="name"
       label="User name"
       type="text"
       value={values.name}
       onChange={(e) => handleInputName(e, setFieldValue)}
       error={!!touched.name && !!errors.name}
       helperText={touched.name && errors.name}
       onBlur={handleBlur}
      />
      <TextField
       variant="outlined"
       margin="normal"
       fullWidth
       id="avatar"
       name="avatar"
       label="Profile image"
       type="url"
       value={values.avatar}
       onChange={(e) => handleInputAvatar(e, setFieldValue)}
       error={!!touched.avatar && !!errors.avatar}
       helperText={touched.avatar && errors.avatar}
       onBlur={handleBlur}
      />
      <TextField
       variant="outlined"
       margin="normal"
       fullWidth
       id="email"
       name="email"
       label="Email Address"
       type="email"
       value={values.email}
       error={!!touched.email && !!errors.email}
       helperText={touched.email && errors.email}
       onBlur={handleBlur}
       onChange={(e) => handleInputEmail(e, setFieldValue)}
      />
      <TextField
       variant="outlined"
       margin="normal"
       fullWidth
       id="password"
       name="password"
       label="Password"
       type="password"
       value={values.password}
       onChange={(e) => handleInputPassword(e, setFieldValue)}
       error={!!touched.password && !!errors.password}
       helperText={touched.password && errors.password}
       onBlur={handleBlur}
      />
      {emailIsNoroff ? (
       <FormControlLabel
        control={<Checkbox onChange={(e) => handleManagerChecked(e, setFieldValue)} sx={{ color: theme.palette.mode === "dark" ? "#4cceac" : "#000914" }} />}
        label="Venue manager?"
        name="venueManager"
       />
      ) : (
       <></>
      )}

      <Box display="flex" justifyContent="end" mt="20px">
       <FormControlLabel
        control={<Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} sx={{ color: theme.palette.mode === "dark" ? "#4cceac" : "#000914" }} />}
        label="By sending this form I agree til the terms of use"
       />
      </Box>
      <Button type="submit" fullWidth variant="contained" color="primary" disabled={!isChecked}>
       Register new user!
      </Button>
     </Box>
    )}
   </Formik>
  </>
 );
};

export default RegisterUser;

// TODO
/*
Need to add validation on this form. 
The form is working, but is missing validation.
*/
