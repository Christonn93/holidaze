// Importing React
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Importing Formik
import { Formik, FieldArray, Field } from "formik";
import * as yup from "yup";

// Importing MUI
import { Alert, Box, Button, Checkbox, FormControlLabel, FormGroup, IconButton, TextField, Typography, useTheme, useMediaQuery } from "@mui/material";

// Importing MUI Icons
import AddBoxIcon from "@mui/icons-material/AddBox";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";

// Importing Components
import MainButton from "../../components/Button/MainButton";

// Importing functions
import useApi from "../../hooks/useApi";
import { venues } from "../../api/constants";
import { updateHead } from "../../js/updateHeader";
import { deleteVenue } from "../../js/FormSubmit/deleteVenue";

const EditVenue = () => {
 let { id } = useParams();
 const [alert, setAlert] = useState(false);
 const [alertContent, setAlertContent] = useState("");
 const [formValues, setFormValues] = useState();

 const device = useTheme();
 const isMobile = useMediaQuery(device.breakpoints.down("md"));

 const navigate = useNavigate();
 const endpoint = venues + `/${id}?_owner=true&_bookings=true`;
 const method = "GET";

 const { data, isLoading, isError } = useApi(endpoint, method);

 if (isLoading) return <h1>Loading...</h1>;

 if (isError) console.error(isError);

 // Destructing venue data
 const { name, description, meta } = data;

 if (!meta) {
  return null;
 }

 updateHead(name, description);

 const formSubmit = (values) => {
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

  const Url = `https://api.noroff.dev/api/v1/holidaze/venues/${id}`;
  const token = localStorage.getItem("ApiToken");
  fetch(Url, {
   headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
   },
   method: "PUT",
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
    setAlertContent("Venue is updated");
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

 const initialValues = {
  name: data.name,
  description: data.description,
  media: data.media,
  price: data.price,
  maxGuests: data.maxGuests,
  wifi: data.meta.wifi,
  parking: data.meta.parking,
  breakfast: data.meta.breakfast,
  pets: data.meta.pets,
  address: data.location.address,
  city: data.location.city,
  zip: data.location.zip,
  country: data.location.country,
  continent: data.location.continent,
  lat: data.location.lat,
  lng: data.location.lng,
 };

 const checkoutSchema = yup.object().shape({});

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
       <Box
        sx={{
         display: "flex",
         justifyContent: "space-between",
         alignContent: "center",
         alignItems: "center",
         gap: 5,
        }}
       >
        <Typography variant="h3" gutterBottom>
         Edit venue
        </Typography>
        <MainButton color={"error"} variant={"contained"} buttonAction={() => deleteVenue(data.id, setAlertContent, setAlert, navigate)} text={"Delete venue"} id={id} />
       </Box>
       <TextField
        fullWidth
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
         flexWrap: "wrap",
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
         style={isMobile ? { width: "100%" } : {}}
        />
        <TextField
         name="city"
         id="city"
         label="City"
         value={values.city}
         onBlur={handleBlur}
         onChange={handleChange}
         error={!!touched.city && !!errors.city}
         helperText={touched.city && errors.city}
         style={isMobile ? { width: "100%" } : {}}
        />
        <TextField
         name="zip"
         id="zip"
         label="Zip"
         value={values.zip}
         onBlur={handleBlur}
         onChange={handleChange}
         error={!!touched.zip && !!errors.zip}
         helperText={touched.zip && errors.zip}
         style={isMobile ? { width: "100%" } : {}}
        />
        <TextField
         name="country"
         id="country"
         label="Country"
         value={values.country}
         onBlur={handleBlur}
         onChange={handleChange}
         error={!!touched.country && !!errors.country}
         helperText={touched.country && errors.country}
         style={isMobile ? { width: "100%" } : {}}
        />
        <TextField
         name="continent"
         id="continent"
         label="Continent"
         value={values.continent}
         onBlur={handleBlur}
         onChange={handleChange}
         error={!!touched.continent && !!errors.continent}
         helperText={touched.continent && errors.continent}
         style={isMobile ? { width: "100%" } : {}}
        />
       </Box>

       <Typography variant="body2">Other specifications</Typography>
       <Box
        sx={{
         display: "flex",
         flexWrap: "wrap",
         gap: 2,
        }}
       >
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
         style={isMobile ? { width: "100%" } : {}}
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
         style={isMobile ? { width: "100%" } : {}}
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
        <Button type="submit" variant="contained" color="success" onClick={() => {}}>
         Edit venue
        </Button>
       </Box>
      </Box>
     )}
    </Formik>
   )}
  </>
 );
};

export default EditVenue;
