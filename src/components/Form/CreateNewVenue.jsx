// Importing React
import React, { useState } from "react";

// Importing Formik
import { Formik, FieldArray } from "formik";
import * as yup from "yup";

// Importing MUI
import { Box, Button, Checkbox, FormControlLabel, FormGroup, IconButton, TextField, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";

const CreateNewVenue = () => {
 // eslint-disable-next-line
 const [formValues, setFormValues] = useState();
 const [value1, setValue1] = useState();
 const [value2, setValue2] = useState();
 const [value3, setValue3] = useState();
 const [value4, setValue4] = useState();

 const formSubmit = (values, submitProps) => {
  console.log("Form data", values);

  setFormValues(values);
  // console.log("submitProps", submitProps);
  // submitProps.setSubmitting(false);
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
  wifi: false, // Optional (default: false)
  parking: false, // Optional (default: false)
  breakfast: false, // Optional (default: false)
  pets: false, // Optional (default: false)
  address: "", // Optional (default: "Unknown")
  city: "", // Optional (default: "Unknown")
  zip: "", // Optional (default: "Unknown")
  country: "", // Optional (default: "Unknown")
  continent: "", // Optional (default: "Unknown")
  lat: 0, // Optional (default: 0)
  lng: 0, // Optional (default: 0)
 };

 const checkoutSchema = yup.object().shape({});

 console.clear();

 return (
  <Formik onSubmit={formSubmit} initialValues={formValues || initialValues} validationSchema={checkoutSchema}>
   {({ values, errors, touched, handleBlur, handleSubmit, handleChange }) => (
    <Box component="form" sx={formSx} onSubmit={handleSubmit} autoComplete="off">
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
     <Box>
      <Typography variant="body2">Venue includes?</Typography>
      <FormGroup row>
       <FormControlLabel control={<Checkbox onClick={() => setValue1(true)} value={value1} name="wifi" id="wifiCheck" />} label="Wifi" />
       <FormControlLabel control={<Checkbox onClick={() => setValue2(true)} value={value2} name="parking" id="parkingCheck" />} label="Parking" />
       <FormControlLabel control={<Checkbox onClick={() => setValue3(true)} value={value3} name="breakfast" id="breakfastCheck" />} label="Breakfast" />
       <FormControlLabel control={<Checkbox onClick={() => setValue4(true)} value={value4} name="pets" id="petsCheck" />} label="Pets" />
      </FormGroup>
     </Box>

     <Box>
      <Typography variant="body2" gutterBottom>
       Add images
      </Typography>
      <FieldArray name="media">
       {(FiledArrayProps) => {
        const { push, remove, form } = FiledArrayProps;
        const { values } = form;
        const { media } = values;
        return (
         <Box
          sx={{
           display: "flex",
           flexDirection: "column",
           gap: 2,
          }}
         >
          {media.map((media, index) => {
           return (
            <>
             <Box
              key={index}
              sx={{
               display: "flex",
               flexDirection: "row",
               alignItems: "center",
               gap: 2,
              }}
             >
              <TextField
               fullWidth
               key={index}
               id={`media[${index}]`}
               name={`media[${index}]`}
               type="url"
               label="Venue image"
               onBlur={handleBlur}
               error={!!touched.image && !!errors.image}
               helperText={touched.image && errors.image}
              />
              {index > 0 && (
               <IconButton type="button" color="error" onClick={() => remove(index)}>
                <DisabledByDefaultIcon />
               </IconButton>
              )}
              <IconButton type="button" color="success" onClick={() => push("")}>
               <AddBoxIcon />
              </IconButton>
             </Box>
            </>
           );
          })}
         </Box>
        );
       }}
      </FieldArray>
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

     <Typography variant="body2">Other specifications</Typography>
     <Box>
      <TextField
       name="price"
       id="price"
       label="Price"
       type="number"
       value={values.price}
       onBlur={handleBlur}
       onChange={handleChange}
       error={!!touched.price && !!errors.price}
       helperText={touched.price && errors.price}
      />
      <TextField
       name="maxGuests"
       id="maxGuests"
       label="Guests"
       type="number"
       value={values.maxGuests}
       onBlur={handleBlur}
       onChange={handleChange}
       error={!!touched.maxGuests && !!errors.maxGuests}
       helperText={touched.maxGuests && errors.maxGuests}
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
      <Button type="submit" variant="contained" color="success" onClick={() => {}}>
       Post new venue
      </Button>
     </Box>
    </Box>
   )}
  </Formik>
 );
};

export default CreateNewVenue;
