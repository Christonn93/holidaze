// Importing React
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importing MUI
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";

import Logout from "@mui/icons-material/Logout";

// Importing components
import { getLocalStorageItem } from "../../js/storage/getItems";
import LogOutUser from "../../js/logOut";

const Navigation = () => {
 const [anchorEl, setAnchorEl] = useState(null);

 const navigate = useNavigate();
 const open = Boolean(anchorEl);
 const isLoggedIn = getLocalStorageItem("isLoggedIn");
 const storedData = getLocalStorageItem("UserData");

 let src = "";
 if (isLoggedIn) src = storedData.avatar;

 const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
 };

 const handleNavigate = (path) => {
  setAnchorEl(null);
  if (!isLoggedIn) navigate("/login");
  if (path === "profile") {
   navigate("/profile");
  }

  if (path === "testing") {
   navigate("/testing");
  }
 };

 const handleLogout = () => {
  setAnchorEl(null);
  LogOutUser();
 };

 const handleClose = () => {
  setAnchorEl(null);
 };

 return (
  <React.Fragment>
   <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
    <Tooltip title="Account" id="dropDownNavigation" data-cy="navigation-icon-button">
     <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }} aria-controls={open ? "account-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined}>
      <Avatar sx={{ width: 43, height: 43 }} src={src}></Avatar>
     </IconButton>
    </Tooltip>
   </Box>
   <Menu
    anchorEl={anchorEl}
    id="account-menu"
    open={open}
    onClose={handleClose}
    onClick={handleClose}
    PaperProps={{
     elevation: 0,
     sx: {
      overflow: "visible",
      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
      mt: 1.5,
      "& .MuiAvatar-root": {
       width: 32,
       height: 32,
       ml: -0.5,
       mr: 1,
      },
      "&:before": {
       content: '""',
       display: "block",
       position: "absolute",
       top: 0,
       right: 14,
       width: 10,
       height: 10,
       bgcolor: "background.paper",
       transform: "translateY(-50%) rotate(45deg)",
       zIndex: 0,
      },
     },
    }}
    transformOrigin={{ horizontal: "right", vertical: "top" }}
    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
   >
    {isLoggedIn ? (
     <Box data-cy="dropdown-menu">
      <MenuItem onClick={() => handleNavigate("profile")} data-cy="navigate-to-profile">
       <ListItemIcon>
        <Avatar src={src} fontSize="small" />
       </ListItemIcon>
       Profile
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleLogout} color="error">
       <ListItemIcon>
        <Logout fontSize="small" />
       </ListItemIcon>
       Logout
      </MenuItem>
     </Box>
    ) : (
     <Box data-cy="dropdown-menu">
      <MenuItem onClick={() => handleNavigate("path")} data-cy="login-button">
       <Avatar /> Login / register
      </MenuItem>
     </Box>
    )}
   </Menu>
  </React.Fragment>
 );
};

export default Navigation;
