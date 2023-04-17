// Importing React
import React from "react";
import { Link } from "react-router-dom";

// Import MUI
import { Typography } from "@mui/material";

// Import MUI Icons
import StarRateIcon from "@mui/icons-material/StarRate";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import GroupsIcon from "@mui/icons-material/Groups";
import WifiIcon from "@mui/icons-material/Wifi";
import PetsIcon from "@mui/icons-material/Pets";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

// Importing function
import { limitDescription } from "../../utils/limitDescription";

const VenueCards = ({ data }) => {
 const { id, name, description, media, price, maxGuests, meta } = data;

 const { wifi, parking, breakfast, pets } = meta;

 const shortDescription = limitDescription(description, 100);

 const handleImgError = (e) => {
  e.target.src = "https://via.placeholder.com/600x400/f7f7f7/000000?text=Image+missing";
 };

 return (
  <>
   <div className="venueCard" key={id}>
    <div
     className="venueCard-image"
     style={{
      backgroundImage: `url(${media[0]})`,
     }}
     onError={handleImgError}
    >
     <span className="venueLikes">
      <StarRateIcon
       sx={{
        color: "yellow",
        fontSize: "40px",
        filter: "drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.5))",
       }}
      />
     </span>
    </div>
    <div className="venueCard-content">
     <Typography variant="h3">{name}</Typography>
     <Typography variant="body1">{shortDescription + "..."}</Typography>
     <div className="venueCard-information">
      <div className="venueCard-information-section">
       <span>
        <LocationOnIcon />
        Location
       </span>
       <span>
        <LocalAtmIcon />
        {price} NOK
       </span>
       <span>
        <GroupsIcon />
        {maxGuests}
       </span>
      </div>
      <div className="venueCard-information-section">
       <span>
        <WifiIcon />
        {wifi === true ? <>Yes</> : <>No</>}
       </span>
       <span>
        <PetsIcon />
        {pets === true ? <>Yes</> : <>No</>}
       </span>
       <span>
        <LocalParkingIcon />
        {parking === true ? <>Yes</> : <>No</>}
       </span>
       <span>
        <RestaurantMenuIcon />
        {breakfast === true ? <>Yes</> : <>No</>}
       </span>
      </div>
     </div>
    </div>
    <div className="venueCard-footer">
     <Link to={`/venue/${id}`} className="venueCard-button">
      Book now
     </Link>
    </div>
   </div>
  </>
 );
};

export default VenueCards;
