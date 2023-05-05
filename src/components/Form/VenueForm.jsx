// Importing React
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importing Formik
import { Formik, FieldArray, Field } from "formik";
import * as yup from "yup";

// Importing formValues
import { initialValues } from "./VenueFormValues";

// Importing MUI
import { Alert, Box, Button, Checkbox, FormControlLabel, FormGroup, IconButton, TextField, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";

/**
 *
 * @param {*} param0
 * @returns
 */
const VenueForm = ({ state, data }) => {
 // eslint-disable-next-line
 const [formValues, setFormValues] = useState();
 const [alert, setAlert] = useState(false);
 const [alertContent, setAlertContent] = useState("");
 const navigate = useNavigate();

 const formSubmit = (values, submitProps) => {
  console.log("Form data", values);

  // eslint-disable-next-line
  const { name, description, media, price, maxGuests, wifi, parking, breakfast, pets, address, city, zip, country, continent, lat, lng } = values;

  if (!media) {
   return null;
  }

  const body = {
   name: name,
   description: description,
   media: [...media],
   price: price,
   maxGuests: maxGuests,
   rating: 0,
   meta: {
    wifi: wifi,
    parking: parking,
    breakfast: breakfast,
    pets: pets,
   },
   location: {
    address: address,
    city: city,
    zip: zip,
    country: country,
    continent: continent,
    lat: lat,
    lng: lng,
   },
  };

  const Url = "https://api.noroff.dev/api/v1/holidaze/venues";
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
    setAlertContent("Venue created");
    setAlert(true);
    setTimeout(() => {
     navigate(`/venue/${data.id}`);
    }, 2000);
   })
   .catch((error) => {
    // Handle error
    console.error(error);
   });

  console.log(body);

  setFormValues(values);
 };

 const checkoutSchema = yup.object().shape({});

 console.clear();

 return (
  <>
   {alert ? (
    <Alert variant="filled" severity="success">
     {alertContent}
    </Alert>
   ) : (
    <Formik onSubmit={formSubmit} initialValues={initialValues || formValues} validationSchema={checkoutSchema}>
     {({ values, errors, touched, handleBlur, handleSubmit, handleChange, setFieldValue }) => (
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
         <FormControlLabel control={<Checkbox onClick={() => setFieldValue("wifi", !values.wifi)} checked={values.wifi} value={values.wifi} name="wifi" id="wifiCheck" />} label="Wifi" />
         <FormControlLabel
          control={<Checkbox onClick={() => setFieldValue("parking", !values.parking)} checked={values.parking} value={values.parking} name="parking" id="parkingCheck" />}
          label="Parking"
         />
         <FormControlLabel
          control={<Checkbox onClick={() => setFieldValue("breakfast", !values.breakfast)} checked={values.breakfast} value={values.breakfast} name="breakfast" id="breakfastCheck" />}
          label="Breakfast"
         />
         <FormControlLabel control={<Checkbox onClick={() => setFieldValue("pets", !values.pets)} checked={values.pets} value={values.pets} name="pets" id="petsCheck" />} label="Pets" />
        </FormGroup>
       </Box>

       <Box>
        <Typography variant="body2" gutterBottom>
         Add images
        </Typography>
        <FieldArray name="media">
         {(FiledArrayProps) => {
          let { push, remove, form } = FiledArrayProps;
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
            {media.map((media, index) => (
             <Box
              key={index}
              sx={{
               display: "flex",
               flexDirection: "row",
               alignItems: "center",
               gap: 2,
              }}
             >
              <Field
               name={`media.${index}`}
               type="url"
               onBlur={handleBlur}
               error={!!touched.media && !!errors.media}
               helperText={touched.media && errors.media}
               label="Venue image"
               fullWidth
               as={TextField}
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
            ))}
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
        <TextField
         name="city"
         id="city"
         label="city"
         value={values.city}
         onBlur={handleBlur}
         onChange={handleChange}
         error={!!touched.city && !!errors.city}
         helperText={touched.city && errors.city}
        />
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
   )}
  </>
 );
};

export default VenueForm;
