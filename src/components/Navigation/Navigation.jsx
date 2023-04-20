// Importing React
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Menu, Stack } from "@mui/material";

// Importing components
import UserAvatar from "../UserAvatar/UserAvatar";
import Logo from "../../assets/Images/h.png";

const Navigation = ({ status }) => {
 // Setting states
 const [anchorEl, setAnchorEl] = useState(null);

 const handleMenu = (event) => {
  setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
  setAnchorEl(null);
 };

 const isLoggedIn = localStorage.getItem("isLoggedIn");

 return (
  <>
   <UserAvatar action={handleMenu} src={Logo} alt="user avatar" size="56" />
   <Menu id="dropDown-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} sx={{ width: "auto" }}>
    <Stack direction="row" spacing={1} padding={1}>
     {!isLoggedIn ? (
      <>
       <Link to="/login">Log in</Link>
       <Link to="/register">Register</Link>
      </>
     ) : (
      <>
       <Link to="/profile">Profile</Link>
      </>
     )}
    </Stack>
   </Menu>
  </>
 );
};

export default Navigation;

/*
 const [isLoggedIn, setLoginStatus] = useState(() => {
  const localData = localStorage.getItem("UserData");
  return localData ? JSON.parse(localData) : [];
 });

 useEffect(() => {
  localStorage.setItem("UserData", JSON.stringify(isLoggedIn));
 }, [isLoggedIn]);

*/
