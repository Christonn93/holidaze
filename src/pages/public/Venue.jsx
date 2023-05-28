// Importing React
import React from "react";
import { useParams } from "react-router-dom";

// importing MUi
import { Box, Card, Typography } from "@mui/material";

// Importing functions
import useApi from "../../hooks/useApi";
import { venues } from "../../api/constants";
import { updateHead } from "../../js/updateHeader";

// Importing components
import VenueTitleSection from "../../components/Venue/SingleVenue/VenueTitleSection";
import VenueOwnerSection from "../../components/Venue/SingleVenue/VenueOwnerSection";
import VenueDescription from "../../components/Venue/SingleVenue/VenueDescription";
import VenueDetails from "../../components/Venue/SingleVenue/VenueDetails";
import ImageCarousel from "../../components/Carousel/ImageCarousel";
import BookingForm from "../../components/Form/BookingForm";
import SiteCrumbs from "../../components/Breadcrumbs/SiteCrumbs";
import VenueLocation from "../../components/Venue/SingleVenue/VenueLocation";
import Loading from "../../components/Loading/Loading";

const Venue = () => {
 let { id } = useParams();
 const endpoint = venues + `/${id}?_owner=true&_bookings=true`;
 const method = "GET";

 const { data, isLoading, isError } = useApi(endpoint, method);

 if (isLoading) return <Loading />;

 if (isError) console.error(isError);

 // Destructing venue data
 const { id: venueId, name, description, media, price, maxGuests, created, updated, meta, bookings, owner, location } = data;

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
    <SiteCrumbs firstStep={"Venues"} secondStep={name} />
    <Box>
     <VenueTitleSection name={name} venueOwner={ownerName} id={venueId} />
     <ImageCarousel media={media} />
    </Box>

    <Box
     sx={{
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 3,
      marginTop: 2,
     }}
    >
     <Box
      sx={{
       display: "flex",
       flexDirection: "column",
       flexWrap: "wrap",
       gap: 2,
      }}
     >
      <VenueDescription venueDescription={description} />
      <Typography variant="h4" marginBottom={1}>
       Location
      </Typography>
      <VenueLocation data={location} />
     </Box>
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
        maxWidth: 450,
       }}
       style={{ width: "100%" }}
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
     <VenueOwnerSection name={ownerName} avatar={avatar} email={email} created={created} updated={updated} />
    </Box>
   </Box>
  </>
 );
};

export default Venue;
