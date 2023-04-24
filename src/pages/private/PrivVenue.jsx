// Importing React
import React, { useContext } from "react";
import { useParams } from "react-router-dom";

// importing MUi
import { Box, CardMedia, Checkbox, FormControlLabel, FormGroup, TextField, Tooltip, Typography } from "@mui/material";

// Importing components
import MainButton from "../../components/Button/MainButton";
import AddImage from "../../components/Dialog/AddImage";

// Importing functions
import useApi from "../../hooks/useApi";
import { venues } from "../../api/constants";
import { updateHead } from "../../js/updateHeader";
import { VenueContext } from "../../context/venueContext";

const PrivVenue = () => {
 let { id } = useParams();

 // eslint-disable-next-line
 const venue = useContext(VenueContext);

 const endpoint = venues + `/${id}?_owner=true&_bookings=true`;
 const method = "GET";

 const { data, isLoading, isError } = useApi(endpoint, method);

 if (isLoading) return <h1>Loading...</h1>;

 if (isError) console.error(isError);

 // Destructing venue data
 const { id: venueId, name, description, media, price, maxGuests, meta } = data;

 if (!meta) {
  return null;
 }

 // Destructing meta data
 const { wifi, parking, breakfast, pets } = meta;

 updateHead(name, description);

 const VenueDetails = {
  id: venueId,
  name: name,
  description: description,
  media: media,
  price: price,
  maxGuests: maxGuests,
  meta: meta,
 };

 localStorage.setItem("VenueDetails", JSON.stringify(VenueDetails));

 return (
  <>
   <form>
    <Box
     sx={{
      display: "flex",
      gap: 2,
      flexDirection: "column",
     }}
    >
     <Box
      sx={{
       display: "flex",
       gap: 2,
       justifyContent: "space-between",
       alignItems: "center",
      }}
     >
      <Typography variant="h1" marginBottom={1} marginTop={1}>
       Edit venue
      </Typography>
      <MainButton color={"error"} variant={"contained"} buttonAction={() => {}} text={"Delete venue"} id={id} />
     </Box>

     <Box>
      <Typography variant="h4" marginBottom={1} marginTop={1}>
       Title
      </Typography>
      <TextField id="title" name="title" variant="outlined" defaultValue={name} fullWidth />
     </Box>

     <Box>
      <Typography variant="h4" marginBottom={1} marginTop={1}>
       Description
      </Typography>
      <TextField id="description" name="description" variant="outlined" defaultValue={description} multiline rows={5} fullWidth />
     </Box>

     <Box>
      <Typography variant="h4" marginBottom={1} marginTop={1}>
       Venue details
      </Typography>
      <FormGroup
       row
       sx={{
        gap: 2,
        marginBottom: 2,
        marginTop: 2,
       }}
      >
       <TextField label={"Max guests"} id="maxGuests" name="maxGuests" type="number" variant="outlined" defaultValue={maxGuests} />
       <TextField label={"Price"} id="price" name="price" type="number" variant="outlined" defaultValue={price} />
      </FormGroup>

      <FormGroup
       row
       sx={{
        gap: 2,
        marginBottom: 2,
       }}
      >
       <FormControlLabel control={<Checkbox checked={wifi} />} label="Wifi" />
       <FormControlLabel control={<Checkbox checked={parking} />} label="Parking" />
       <FormControlLabel control={<Checkbox checked={breakfast} />} label="Breakfast" />
       <FormControlLabel control={<Checkbox checked={pets} />} label="Pets" />
      </FormGroup>
     </Box>

     <Box>
      <Typography variant="h4" marginBottom={1} marginTop={1}>
       Photos
      </Typography>
      <AddImage id={venueId} />
      <FormGroup
       sx={{
        gap: 2,
        marginBottom: 2,
       }}
      >
       {media.map((item, index) => (
        <Tooltip key={item} title={<CardMedia component="img" image={item} alt="alternative text for image" loading="lazy" />}>
         <TextField name="media" variant="outlined" defaultValue={item} fullWidth />
         {}
        </Tooltip>
       ))}
      </FormGroup>
     </Box>

     <Box
      sx={{
       display: "flex",
       gap: 2,
       justifyContent: "flex-end",
      }}
     >
      <MainButton color={"success"} variant={"contained"} buttonAction={() => {}} text={"Update venue"} id={id} />
      <MainButton color={"warning"} variant={"outlined"} buttonAction={() => {}} text={"Abort edit"} id={id} />
     </Box>
    </Box>
   </form>
  </>
 );
};

export default PrivVenue;
