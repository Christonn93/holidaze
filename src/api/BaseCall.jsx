// Importing React
import { useEffect, useState } from "react";

/**
 * Function to call a api to receive data
 * @Creator Martin Kruger
 * 
 * @param url Needs a url for the endpoint of the api call you want to make
 * @Return Returning data, loading area and error area.
 */
const ApiHook = (url) => {
 const [data, setData] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const [isError, setIsError] = useState(false);

 useEffect(() => {
  async function getData() {
   try {
    setIsLoading(true);
    setIsError(false);
    const fetchedData = await fetch(url);
    const json = await fetchedData.json();
    setData(json);
   } catch (error) {
    console.log(error);
    setIsError(true);
   } finally {
    setIsLoading(false);
   }
  }
  getData();
 }, [url]);
 return { data, isLoading, isError };
};

export default ApiHook;
