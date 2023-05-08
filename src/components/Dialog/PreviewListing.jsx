// Importing React
import React, { useState } from "react";

// Importing MUI
import { Box, Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

// Importing components
import VenueTitleSection from "../../components/Venue/SingleVenue/VenueTitleSection";
import VenueOwnerSection from "../../components/Venue/SingleVenue/VenueOwnerSection";
import VenueDescription from "../../components/Venue/SingleVenue/VenueDescription";
import VenueDetails from "../../components/Venue/SingleVenue/VenueDetails";
import ImageCarousel from "../../components/Carousel/ImageCarousel";
import BookingForm from "../../components/Form/BookingForm";
import SiteCrumbs from "../../components/Breadcrumbs/SiteCrumbs";

/**
 *
 * @param {data} data
 * @returns
 */
const PreviewListing = ({ data }) => {
 const [open, setOpen] = useState(false);

 const handleClickOpen = () => {
  setOpen(true);
 };

 const handleClose = () => {
  setOpen(false);
 };

 // Destructing venue data
 const { id: venueId, name, description, media, price, maxGuests, created, updated, meta, bookings, owner } = data;

 if (!meta && !owner && !bookings) {
  return null;
 }

 // Destructing meta data
 const { wifi, parking, breakfast, pets } = meta;

 // Destructing owner data
 const { name: ownerName, email, avatar } = owner;

 const storedData = localStorage.getItem("UserData");

 const storedName = JSON.parse(storedData).name;

 let manager = false;
 if (ownerName === storedName) {
  manager = true;
 }

 return (
  <>
   <Button variant="outlined" onClick={handleClickOpen}>
    Preview venue
   </Button>
   <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
    <DialogTitle id="alert-dialog-title">Preview venue</DialogTitle>
    <DialogContent>
     <Box
      sx={{
       display: "flex",
       gap: 2,
       flexDirection: "column",
      }}
     >
      <SiteCrumbs firstStep={"Venues"} secondStep={name} />
      <Box>
       <VenueTitleSection name={name} manager={manager} id={venueId} created={created} updated={updated} />
       <ImageCarousel media={media} />
      </Box>

      <Box
       sx={{
        display: "flex",
        gap: 3,
       }}
      >
       <VenueDescription venueDescription={description} />
       <Box>
        <Typography variant="h4" marginBottom={1}>
         Book your stay!
        </Typography>
        <Card
         sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
          padding: 2,
          maxWidth: 350,
         }}
        >
         <VenueDetails maxGuests={maxGuests} wifi={wifi} breakfast={breakfast} parking={parking} pets={pets} />
         <Typography variant="h5">{price} ,- night guests</Typography>
         <BookingForm data={data} id={venueId} />
        </Card>
       </Box>
      </Box>

      <Box
       sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
        padding: 2,
       }}
      >
       <Typography variant="h4" marginBottom={1}>
        Owner details
       </Typography>
       <VenueOwnerSection name={ownerName} avatar={avatar} email={email} />
      </Box>
     </Box>
    </DialogContent>
    <DialogActions>
     <Button onClick={handleClose}>Close</Button>
    </DialogActions>
   </Dialog>
  </>
 );
};

export default PreviewListing;
