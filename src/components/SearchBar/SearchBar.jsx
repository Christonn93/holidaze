// Importing React
import React from "react";

// Importing MUI
import { InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

// Importing MUI Icons
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
 position: "relative",
 borderRadius: theme.shape.borderRadius,
 backgroundColor: alpha(theme.palette.primary.light, 0.15),
 "&:hover": {
  backgroundColor: alpha(theme.palette.common.white, 0.25),
 },
 marginLeft: 0,
 width: "100%",
 height: "100%",
 [theme.breakpoints.up("sm")]: {
  marginLeft: theme.spacing(1),
  width: "auto",
 },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
 padding: theme.spacing(0, 2),
 height: "100%",
 position: "absolute",
 pointerEvents: "none",
 display: "flex",
 alignItems: "center",
 justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
 color: "inherit",
 "& .MuiInputBase-input": {
  padding: theme.spacing(1, 1, 1, 0),
  // vertical padding + font size from searchIcon
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create("width"),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
   width: "12ch",
   "&:focus": {
    width: "20ch",
   },
  },
 },
}));

const SearchBar = () => {
 return (
  <>
   <Search>
    <SearchIconWrapper>
     <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase placeholder="Find venue.." inputProps={{ "aria-label": "search" }} />
   </Search>
  </>
 );
};

export default SearchBar;
