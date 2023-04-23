// Importing React
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importing MUI
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";

import Logout from "@mui/icons-material/Logout";

// Importing components
import { getLocalStorageItem } from "../../js/storage/getItems";
import { logOutListener } from "../../js/logOut";

const Navigation = ({ status }) => {
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

 const handleNavigate = () => {
  setAnchorEl(null);
  navigate("/profile");

  if (!isLoggedIn) navigate("/login");
 };

 const handleLogout = () => {
  setAnchorEl(null);
  logOutListener();
 };

 const handleClose = () => {
  setAnchorEl(null);
 };

 return (
  <React.Fragment>
   <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
    <Tooltip title="Account">
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
     <Box>
      <MenuItem onClick={handleNavigate}>
       <Avatar src={src} /> Profile
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleLogout}>
       <ListItemIcon>
        <Logout fontSize="small" />
       </ListItemIcon>
       Logout
      </MenuItem>
     </Box>
    ) : (
     <Box>
      <MenuItem onClick={handleNavigate}>
       <Avatar /> Login / register
      </MenuItem>
     </Box>
    )}
   </Menu>
  </React.Fragment>
 );
};

export default Navigation;
