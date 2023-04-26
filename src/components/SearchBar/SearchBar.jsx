import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import { IconButton, TextField } from "@mui/material";

// Importing api fetch

// Importing components

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

 return (
  <>
   <IconButton onClick={showForm}>
    <SearchIcon />
   </IconButton>
   {displayForm && (
    <form onSubmit={handleSubmit}>
     <TextField sx={searchField} variant="standard" label={"Search"} name="search" />
    </form>
   )}
  </>
 );
};

export default SearchBar;
