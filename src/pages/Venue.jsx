// Importing React
import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import ApiHook from "../api/BaseCall";
import { venues, baseUrl } from "../api/constants";
import { Typography } from "@mui/material";

const Venue = () => {
 let { id } = useParams();
 const { data, isError, isLoading } = ApiHook(baseUrl + venues + `/${id}`);
 return (
  <>
   <Typography variant="h1">{data.name}</Typography>
  </>
 );
};

export default Venue;
