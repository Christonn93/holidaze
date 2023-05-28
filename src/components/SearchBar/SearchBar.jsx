// Importing React
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

// Importing MUI
import { Box, IconButton, TextField } from "@mui/material";

// Importing MUI Icons
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const searchField = {};

const SearchBar = () => {
 const [displayForm, setShowForm] = useState(false);
 // eslint-disable-next-line
 const [searchParams, setSearchParams] = useSearchParams();

 const showForm = () => {
  setShowForm(!displayForm);
 };

 const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const searchValue = form.search.value;
  setSearchParams({ search: searchValue });
 };

 const removeQueryParams = () => {
  const param = searchParams.get("search");

  if (param) {
   // 👇️ delete each query param
   searchParams.delete("search");

   // 👇️ update state after
   setSearchParams(searchParams);
  }
 };

 return (
  <>
   <IconButton onClick={showForm}>
    <SearchIcon />
   </IconButton>
   {displayForm && (
    <Box
     component={"form"}
     onSubmit={handleSubmit}
     sx={{
      display: "flex",
      gap: 1,
      alignItems: "center",
     }}
    >
     <TextField sx={searchField} variant="standard" label={"Search"} name="search" />
     <IconButton
      onClick={() => {
       removeQueryParams();
       showForm();
      }}
     >
      <ClearIcon />
     </IconButton>
    </Box>
   )}
  </>
 );
};

export default SearchBar;
