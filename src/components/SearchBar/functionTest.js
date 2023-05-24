import { useState } from "react";

const getSearchResults = (data) => {
 const [fetchedData] = useState(data);
 const [searchResults, setSearchResults] = useState([]);
 const [filterResults, setFilterResults] = useState([]);
 const [offset, setOffset] = useState(0);
 const [search, setSearch] = useState();

 if (fetchedData.length >= 100) {
  filterResults = fetchedData.filter((venue) => {
   venue.name.toLowerCase().includes(search.toLowerCase()) ||
    venue.location.country.toLowerCase().includes(search.toLowerCase()) ||
    venue.location.continent.toLowerCase().includes(search.toLowerCase()) ||
    venue.location.city.toLowerCase().includes(search.toLowerCase());
  });
  setSearchResults(filterResults);
  setOffset(100);
 }

 return searchResults;
};

export default getSearchResults;
