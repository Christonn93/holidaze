// Importing React
import React, { useState } from "react";

// Importing Formik
import { Formik } from "formik";
import * as yup from "yup";

// Importing MUI
import { Alert, Box, Button, TextField, Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";

// Importing MUI Icons
import { PhotoCamera } from "@mui/icons-material";

// Importing components
import { headers } from "../../api/auth/headers";
import { profiles } from "../../api/constants";

const updateLocalStorageAvatar = (newAvatar) => {
 const userDataString = localStorage.getItem("UserData");
 const userData = JSON.parse(userDataString);
 userData.avatar = newAvatar;
 const updatedUserDataString = JSON.stringify(userData);
 localStorage.setItem("UserData", updatedUserDataString);
};

const ReplaceUserImage = ({ name }) => {
 const [open, setOpen] = useState(false);
 const [avatar, setAvatar] = useState();
 const [updateSuccessful, setUpdateSuccessful] = useState("");

 const handleClickOpen = () => {
  setOpen(true);
 };

 const handleClose = () => {
  setOpen(false);
 };

 const handleRequest = async () => {
  // Variables for request
  const Url = "https://api.noroff.dev/api/v1/holidaze";
  const endPoint = profiles + `/${name}/media`;
  const body = { avatar: avatar };

  try {
   const response = await fetch(Url + endPoint, {
    method: "PUT",
    headers: headers("application/json"),
    body: JSON.stringify(body),
   });

   if (!response.ok) {
    setUpdateSuccessful(false);
    throw new Error("Request failed with status: " + response.status);
   }

   const data = await response.json();

   if (data) {
    setUpdateSuccessful(true);
    updateLocalStorageAvatar(avatar);
    setTimeout(() => {
     window.location.reload();
    }, 3000);
   }

   return data;
  } catch (error) {
   console.error(error);
   throw error;
  }
 };

 const initialValues = {
  avatar: "",
 };

 const checkoutSchema = yup.object().shape({
  avatar: yup.string().required("A valid URL is missing"),
 });

 const changeAvatar = (e, setFieldValue) => {
  const avatar = e.target.value;
  setAvatar(avatar);
  setFieldValue("avatar", avatar, false);
 };

 return (
  <>
   <IconButton color="secondary" aria-label="upload picture" component="label" onClick={handleClickOpen}>
    <PhotoCamera />
   </IconButton>
   <Dialog
    open={open}
    onClose={handleClose}
    sx={{
     padding: 3,
    }}
   >
    <DialogTitle>Change your profile image</DialogTitle>
    <DialogContent>
     <Formik onSubmit={handleRequest} initialValues={initialValues} validationSchema={checkoutSchema}>
      {({ values, errors, touched, handleBlur, handleSubmit, setFieldValue }) => (
       <>
        <Box
         component="form"
         sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
         }}
         onSubmit={handleSubmit}
         autoComplete="off"
        >
         <TextField
          margin="dense"
          id="avatar"
          name="avatar"
          label="User avatar URL"
          type="url"
          fullWidth
          value={values.avatar}
          onBlur={handleBlur}
          onChange={(e) => changeAvatar(e, setFieldValue)}
          error={!!touched.avatar && !!errors.avatar}
          helperText={touched.avatar && errors.avatar}
         />
         <Button type="submit" variant="contained" color="warning">
          Continue
         </Button>
         {updateSuccessful === true ? (
          <Alert severity="success">Upload successful</Alert>
         ) : updateSuccessful === false ? (
          <Alert severity="error">Oh no. Looks like there is a bug lurking in the system..</Alert>
         ) : (
          <></>
         )}
        </Box>
       </>
      )}
     </Formik>
    </DialogContent>
   </Dialog>
  </>
 );
};

export default ReplaceUserImage;
