// Importing React
import React, { useEffect, useState } from "react";
import { DateRange } from "react-date-range";

// Importing Formik
import { Formik } from "formik";
import * as yup from "yup";

// Importing MUI
import { Alert, IconButton, AlertTitle, Box, Button, Collapse, TextField, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

// Importing components

// Importing functions
import { getDatesBetween } from "../../js/getDatesBetween";

const BookingForm = ({ data, id }) => {
 // useState variables
 const [success, setSuccess] = useState(false);
 const [error, setError] = useState(false);
 const [open, setOpen] = useState(true);
 const [blockedValue, setBlockedValue] = useState([]);
 const [inputValue, setInputValue] = useState([
  {
   startDate: new Date(),
   endDate: new Date(),
   key: "selection",
  },
 ]);

 // eslint-disable-next-line
 const [formValues, setFormValues] = useState();

 // eslint-disable-next-line
 const dataArray = data;

 const checkoutSchema = yup.object().shape({});

 useEffect(() => {
  const allBlockedDates = data.bookings.flatMap((e) => getDatesBetween(new Date(e.dateFrom), new Date(e.dateTo)));
  setBlockedValue(allBlockedDates);
 }, [data]);

 const initialValues = {
  dateFrom: "",
  dateTo: "",
  guests: "",
 };

 const formSubmit = (values) => {
  inputValue.map((e) => Object.assign(values, { dateFrom: e.startDate.toISOString() }));
  inputValue.map((e) => Object.assign(values, { dateTo: e.endDate.toISOString() }));
  console.log("Form data", values);

  const body = {
   dateFrom: values.dateFrom,
   dateTo: values.dateTo,
   guests: values.guests,
   venueId: id,
  };

  console.log(body);

  const Url = `https://api.noroff.dev/api/v1/holidaze/bookings`;
  const token = localStorage.getItem("ApiToken");
  fetch(Url, {
   headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
   },
   method: "POST",
   body: JSON.stringify(body),
  })
   .then((response) => {
    if (!response.ok) {
     throw new Error("Failed to submit form");
    }
    return response.json();
   })
   .then((data) => {
    // Handle successful response from API
    console.log(data);
    setSuccess(true);
   })
   .catch((error) => {
    // Handle error
    console.error(error);
    setError(true);
   });

  console.log(body);

  setFormValues(values);
 };

 let isLoggedIn = localStorage.getItem("isLoggedIn");

 if (!isLoggedIn) isLoggedIn = false;

 return (
  <>
   <Formik onSubmit={formSubmit} initialValues={initialValues || formValues} validationSchema={checkoutSchema}>
    {({ values, errors, touched, handleBlur, handleSubmit, handleChange }) => (
     <>
      <Box
       component="form"
       onSubmit={handleSubmit}
       sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 350,
       }}
      >
       {success ? (
        <Collapse in={open}>
         <Alert
          action={
           <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
             setOpen(false);
            }}
           >
            <CloseIcon fontSize="inherit" />
           </IconButton>
          }
          sx={{ mb: 2 }}
          severity="success"
          variant="outlined"
         >
          <AlertTitle>Success</AlertTitle>
          <Typography variant="body1">Booking confirmed.</Typography>
          <Typography variant="body1">You can find the booking details on your profile.</Typography>
          <Typography variant="body1">Enjoy your stay</Typography>
         </Alert>
        </Collapse>
       ) : error ? (
        <Collapse in={open}>
         <Alert
          action={
           <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
             setOpen(false);
            }}
           >
            <CloseIcon fontSize="inherit" />
           </IconButton>
          }
          sx={{ mb: 2 }}
          severity="error"
          variant="outlined"
         >
          <AlertTitle>We are sorry</AlertTitle>
          <Typography variant="body1">Booking could not be confirmed.</Typography>
          <Typography variant="body1">please try again</Typography>
         </Alert>
        </Collapse>
       ) : (
        <>
         <DateRange
          disabledDates={blockedValue}
          editableDateInputs={true}
          onChange={(item) => {
           setInputValue([item.selection]);
          }}
          name="date"
          moveRangeOnFirstSelection={false}
          ranges={inputValue}
         />
         <TextField
          id="guests"
          name="guests"
          label="Guests"
          type="number"
          value={values.guests}
          onBlur={handleBlur}
          onChange={handleChange}
          error={!!touched.guests && !!errors.guests}
          helperText={touched.guests && errors.guests}
         />
         {isLoggedIn ? (
          <Button variant="contained" type="submit">
           Submit
          </Button>
         ) : (
          <Button variant="contained" type="submit" disabled>
           Log in to book
          </Button>
         )}
        </>
       )}
      </Box>
     </>
    )}
   </Formik>
  </>
 );
};

export default BookingForm;
