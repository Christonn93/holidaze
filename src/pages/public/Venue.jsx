// Importing React
import React from "react";
import { useParams } from "react-router-dom";

// importing MUi
import { Box, Typography } from "@mui/material";

// Importing functions
import useApi from "../../hooks/useApi";
import { venues } from "../../api/constants";
import { updateHead } from "../../js/updateHeader";

// Importing components
import VenueTitleSection from "../../components/Venue/VenueTitleSection";
import VenueOwnerSection from "../../components/Venue/VenueOwnerSection";
import VenueDetailsSection from "../../components/Venue/VenueDetailsSection";
import VenueMainMedia from "../../components/Venue/VenueMainMedia";
import VenueMediaGallery from "../../components/Venue/VenueMediaGallery";
import VenueBookingSection from "../../components/Venue/VenueBookingSection";

const Venue = () => {
 let { id } = useParams();
 const endpoint = venues + `/${id}?_owner=true&_bookings=true`;
 const method = "GET";

 const { data, isLoading, isError } = useApi(endpoint, method);

 if (isLoading) return <h1>Loading...</h1>;

 if (isError) console.error(isError);

 // Destructing venue data
 const { id: venueId, name, description, media, price, maxGuests, created, updated, meta, bookings, owner } = data;

 if (!meta && !owner && !bookings) {
  return null;
 }

 // Destructing meta data
 const { wifi, parking, breakfast, pets } = meta;

 // Destructing owner data
 const { name: ownerName, email, avatar } = owner;

 updateHead(name, description);

 return (
  <>
   <Box
    sx={{
     display: "flex",
     gap: 2,
     flexDirection: "column",
    }}
   >
    <Box>
     <VenueTitleSection name={name} created={created} updated={updated} />
     <VenueMainMedia media={media} />
    </Box>
    <Box>
     <VenueDetailsSection venueDescription={description} maxGuests={maxGuests} price={price} wifi={wifi} breakfast={breakfast} parking={parking} pets={pets} />
    </Box>

    <Box>
     <Typography variant="h4" marginBottom={1}>
      Book your stay!
     </Typography>
     <VenueBookingSection id={venueId} />
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
     <VenueOwnerSection name={ownerName} avatar={avatar} email={email} />
    </Box>
   </Box>
  </>
 );
};

export default Venue;
