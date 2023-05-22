// Importing React
import React, { useState } from "react";

// Importing MUI
import { Box, Tabs, Tab, Button } from "@mui/material";
import { Logout } from "@mui/icons-material";

// Importing functions
import useApi from "../../hooks/useApi";
import { profiles } from "../../api/constants";
import LogOutUser from "../../js/logOut";
import { updateHead } from "../../js/updateHeader";

// Importing components
import { TabPanel } from "../Tab/TabPanel";
import ProfileDetails from "./ProfileDetails";
import VenueDetails from "./Manager/VenueDetails";
import BookingsDetails from "./BookingsDetails";
import SiteCrumbs from "../Breadcrumbs/SiteCrumbs";
import Loading from "../Loading/Loading";

const Dashboard = ({ status }) => {
 console.clear();
 const [value, setValue] = useState(0);

 updateHead("Dashboard");

 const handleChange = (event, newValue) => {
  setValue(newValue);
 };

 const getLocalData = localStorage.getItem("UserData");
 const parsedLocalData = JSON.parse(getLocalData);
 const userName = parsedLocalData.name;

 const endpoint = profiles + `/${userName}?_venues=true&_bookings=true`;
 const endpointVenues = profiles + `/${userName}/venues?_bookings=true`;
 const method = "GET";

 const { data, isLoading, isError } = useApi(endpoint, method);
 const { data: venueData } = useApi(endpointVenues, method);

 if (isLoading) return <Loading />;

 if (isError) console.log(isError);

 return (
  <>
   <SiteCrumbs firstStep={"Dashboard"} />
   <Box
    sx={{
     display: "flex",
     justifyContent: "space-between",
     alignItems: "center",
    }}
   >
    <h1>Dashboard</h1>
    <Button variant="outlined" color="error" onClick={LogOutUser} data-cy="logout-button">
     <Logout fontSize="small" />
     Logout
    </Button>
   </Box>
   <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex", flexDirection: "column" }}>
    <Tabs value={value} onChange={handleChange} aria-label="Dashboard tabs" sx={{ borderBottom: 1, borderColor: "divider", height: "100%" }}>
     <Tab label="Profile" />
     <Tab label="Bookings" />
     {status === "manager" ? <Tab label="Your Venues" /> : null}
    </Tabs>
    <TabPanel value={value} index={0} data-cy="profile-tab">
     <ProfileDetails name={data.name} avatar={data.avatar} venueManager={data.venueManager} />
    </TabPanel>
    <TabPanel value={value} index={1} data-cy="booking-tap">
     <BookingsDetails data={data.bookings} />
    </TabPanel>
    <TabPanel value={value} index={2} data-cy="venue-tab">
     <VenueDetails data={venueData} />
    </TabPanel>
   </Box>
  </>
 );
};

export default Dashboard;
