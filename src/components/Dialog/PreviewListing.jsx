// Importing React
import React, { useState } from "react";

// Importing MUI
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

// Importing components
import VenueTitleSection from "../../components/Venue/SingleVenue/VenueTitleSection";
import VenueOwnerSection from "../../components/Venue/SingleVenue/VenueOwnerSection";
import VenueDetailsSection from "../../components/Venue/SingleVenue/VenueDetailsSection";
import VenueMainMedia from "../../components/Venue/SingleVenue/VenueMainMedia";
import VenueMediaGallery from "../../components/Venue/SingleVenue/VenueMediaGallery";
import VenueBookingSection from "../../components/Venue/SingleVenue/VenueBookingSection";

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
      <Box>
       <VenueTitleSection name={name} manager={manager} id={venueId} />
       <VenueMainMedia media={media} />
      </Box>
      <Box>
       <VenueDetailsSection venueDescription={description} maxGuests={maxGuests} price={price} wifi={wifi} breakfast={breakfast} parking={parking} pets={pets} />
      </Box>

      <Box>
       <Typography variant="h4" marginBottom={1}>
        Book your stay!
       </Typography>
       <VenueBookingSection data={bookings} id={venueId} />
      </Box>

      <Box>
       <Typography variant="h4" marginBottom={1}>
        Photos
       </Typography>
       <VenueMediaGallery media={media} />
      </Box>

      <Box>
       <Typography variant="h4" marginBottom={1}>
        Owner details
       </Typography>
       <VenueOwnerSection name={ownerName} avatar={avatar} email={email} created={created} updated={updated} />
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
