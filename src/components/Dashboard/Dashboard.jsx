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

const Dashboard = ({ status }) => {
 const [value, setValue] = useState(0);

 updateHead("Dashboard");

 const handleChange = (event, newValue) => {
  setValue(newValue);
 };

 const getLocalData = localStorage.getItem("UserData");
 const parsedLocalData = JSON.parse(getLocalData);
 const userName = parsedLocalData.name;

 const endpoint = profiles + `/${userName}?_venues=true&_bookings=true`;
 const method = "GET";

 const { data, isLoading, isError } = useApi(endpoint, method);

 if (isLoading) return <h1>Loading....</h1>;

 if (isError) console.log(isError);

 return (
  <>
   <Box
    sx={{
     display: "flex",
     justifyContent: "space-between",
     alignItems: "center",
    }}
   >
    <h1>Dashboard</h1>
    <Button variant="outlined" color="error" onClick={LogOutUser}>
     <Logout fontSize="small" />
     Logout
    </Button>
   </Box>
   <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex", flexDirection: "column" }}>
    <Tabs value={value} onChange={handleChange} aria-label="Dashboard tabs" sx={{ borderBottom: 1, borderColor: "divider", height: "100%" }}>
     <Tab label="Profile" />
     <Tab label="Bookings" />
     {status ? <Tab label="Your Venues" /> : <></>}
    </Tabs>
    <TabPanel value={value} index={0}>
     <ProfileDetails name={data.name} avatar={data.avatar} venueManager={data.venueManager} />
    </TabPanel>
    <TabPanel value={value} index={1}>
     <BookingsDetails data={data.bookings} />
    </TabPanel>
    <TabPanel value={value} index={2}>
     <VenueDetails data={data.venues} />
    </TabPanel>
   </Box>
  </>
 );
};

export default Dashboard;
