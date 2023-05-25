// Import React
import React from "react";
import GoogleMapReact from "google-map-react";
import env from "react-dotenv";

// Importing MUI
import { Box, useTheme, useMediaQuery } from "@mui/material";

// Importing MUI Icons
import PushPinIcon from "@mui/icons-material/PushPin";

const MapLocation = ({ lat, lng }) => {
 const device = useTheme();
 const isMobile = useMediaQuery(device.breakpoints.down("md"));

 const defaultProps = {
  center: {
   lat: lat,
   lng: lng,
  },
  zoom: 11,
 };

 const AnyReactComponent = ({ text }) => <div>{text}</div>;

 const mobile = {
  height: "250px",
  width: "350px",
 };

 const desktop = {
  height: "400px",
  width: "400px",
 };
 return (
  <>
   <Box style={isMobile ? mobile : desktop}>
    <GoogleMapReact bootstrapURLKeys={{ key: env.REACT_APP_GOOGLE_MAP_KEY }} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
     <AnyReactComponent lat={lat} lng={lng} text={<PushPinIcon color="secondary" />} />
    </GoogleMapReact>
   </Box>
  </>
 );
};

export default MapLocation;
