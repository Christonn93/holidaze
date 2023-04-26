// Importing React
import React from "react";
import { useParams } from "react-router-dom";

// Importing api fetch
import useApi from "../../hooks/useApi";
import { venues } from "../../api/constants";

// Importing components
import Loading from "../../components/Loading/Loading";
import UiFeedback from "../../components/UiFeedback/UiFeedback";
import { Typography } from "@mui/material";

const SearchResult = () => {
 const { searchParams } = useParams();

 const endpoint = venues;
 const method = "GET";

 const { data, isLoading, isError } = useApi(endpoint, method);

 if (isLoading) return <Loading />;

 if (isError) {
  console.error(isError);
  return <UiFeedback severity="error" title={"An unexpected error have accrued"} message={"Please refresh the page"} />;
 }

 const resultsArray = data.filter((item) => item.name.includes(searchParams) && item.location.city.includes(searchParams) && item.location.country.includes(searchParams));

 console.log("data", data);

 console.log("Data filter", resultsArray);

 return (
  <>
   <Typography variant="h1">Search results</Typography>
  </>
 );
};

export default SearchResult;
