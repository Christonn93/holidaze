// Importing React
import React, { useState } from "react";

// Importing Formik
import { Formik } from "formik";
import * as yup from "yup";

// Importing MUI
import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";

const CreateNewVenue = () => {
 // eslint-disable-next-line
 const [formSubmitted, setFormSubmitted] = useState(false);
 const [value1, setValue1] = useState(false);
 const [value2, setValue2] = useState(false);
 const [value3, setValue3] = useState(false);
 const [value4, setValue4] = useState(false);
 const [imageInput, setImageInput] = useState([{ venueImage: "" }]);

 // Media inputs
 const handleFormChange = (index, event) => {
  let data = [...imageInput];
  data[index][event.target.name] = event.target.value;
  setImageInput(data);
 };

 const addFields = () => {
  let newImage = { venueImage: "" };
  setImageInput([...imageInput, newImage]);
 };

 const formSubmit = (values) => {
  console.log(values);
  setFormSubmitted(true);
 };

 const formSx = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
 };

 const initialValues = {
  name: "", // Required
  description: "", // Required
  media: [""], // Optional
  price: 0, // Required
  maxGuests: 0, // Required
  rating: 0, // Optional (default: 0)
  meta: {
   wifi: "", // Optional (default: false)
   parking: "", // Optional (default: false)
   breakfast: "", // Optional (default: false)
   pets: "", // Optional (default: false)
  },
  location: {
   address: "", // Optional (default: "Unknown")
   city: "", // Optional (default: "Unknown")
   zip: "", // Optional (default: "Unknown")
   country: "", // Optional (default: "Unknown")
   continent: "", // Optional (default: "Unknown")
   lat: 0, // Optional (default: 0)
   lng: 0, // Optional (default: 0)
  },
 };

 const checkoutSchema = yup.object().shape({});

 console.clear();

 return (
  <Formik onSubmit={formSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
   {({ values, errors, touched, handleBlur, handleSubmit, handleChange }) => (
    <Box component="form" sx={formSx} onSubmit={handleSubmit}>
     <Typography variant="h3" gutterBottom>
      New venue form
     </Typography>
     <TextField
      id="venueName"
      name="name"
      label="Venue name"
      value={values.name}
      onBlur={handleBlur}
      onChange={handleChange}
      error={!!touched.name && !!errors.name}
      helperText={touched.name && errors.name}
     />
     <TextField
      id="venueDescription"
      name="description"
      label="Venue description"
      multiline
      rows={4}
      value={values.description}
      onBlur={handleBlur}
      onChange={handleChange}
      error={!!touched.description && !!errors.description}
      helperText={touched.description && errors.description}
     />
     <Box
      sx={{
       display: "flex",
       flexDirection: "column",
       gap: 2,
      }}
     >
      {imageInput.map((input, index, id) => {
       return (
        <TextField
         fullWidth
         key={index}
         id="venueImage"
         name="media"
         type="url"
         label="Venue image"
         value={values.image}
         onBlur={handleBlur}
         onChange={(event) => handleFormChange(index, event)}
         error={!!touched.image && !!errors.image}
         helperText={touched.image && errors.image}
        />
       );
      })}
      <Box>
       <Button onClick={addFields} variant="outlined" color="success">
        Add Image
       </Button>
      </Box>
     </Box>
     <Box>
      <Typography variant="body2">Venue includes?</Typography>
      <FormGroup row>
       <FormControlLabel
        control={
         <Checkbox
          onChange={() => {
           setValue1(true);
          }}
          value={value1}
          name="wifi"
          id="wifiCheck"
         />
        }
        label="Wifi"
       />
       <FormControlLabel
        control={
         <Checkbox
          onChange={() => {
           setValue2(true);
          }}
          value={value2}
          name="parking"
          id="parkingCheck"
         />
        }
        label="Parking"
       />
       <FormControlLabel
        control={
         <Checkbox
          onChange={() => {
           setValue3(true);
          }}
          value={value3}
          name="breakfast"
          id="breakfastCheck"
         />
        }
        label="Breakfast"
       />
       <FormControlLabel
        control={
         <Checkbox
          onChange={() => {
           setValue4(true);
          }}
          value={value4}
          name="pets"
          id="petsCheck"
         />
        }
        label="Pets"
       />
      </FormGroup>
     </Box>
     <Typography variant="body2">Location</Typography>
     <Box
      sx={{
       display: "flex",
       gap: 2,
      }}
     >
      <TextField
       name="address"
       id="address"
       label="Address"
       value={values.address}
       onBlur={handleBlur}
       onChange={handleChange}
       error={!!touched.address && !!errors.address}
       helperText={touched.address && errors.address}
      />
      <TextField name="city" id="city" label="city" value={values.city} onBlur={handleBlur} onChange={handleChange} error={!!touched.city && !!errors.city} helperText={touched.city && errors.city} />
      <TextField name="zip" id="zip" label="zip" value={values.zip} onBlur={handleBlur} onChange={handleChange} error={!!touched.zip && !!errors.zip} helperText={touched.zip && errors.zip} />
      <TextField
       name="country"
       id="country"
       label="country"
       value={values.country}
       onBlur={handleBlur}
       onChange={handleChange}
       error={!!touched.country && !!errors.country}
       helperText={touched.country && errors.country}
      />
      <TextField
       name="continent"
       id="continent"
       label="continent"
       value={values.continent}
       onBlur={handleBlur}
       onChange={handleChange}
       error={!!touched.continent && !!errors.continent}
       helperText={touched.continent && errors.continent}
      />
     </Box>
     <Box
      sx={{
       display: "flex",
       gap: 2,
       justifyContent: "flex-end",
       marginTop: 2,
      }}
     >
      <Button variant="contained" color="warning" onClick={() => {}}>
       Preview post
      </Button>
      <Button variant="contained" color="success" onClick={() => {}}>
       Post new venue
      </Button>
     </Box>
    </Box>
   )}
  </Formik>
 );
};

export default CreateNewVenue;
