// Importing react
import { useState, useEffect } from "react";

/**
 * useAxios Hook.
 *
 *Used to fetch data with axios
 *
 *
 * @params
 * @example
 *
 * @OriginalPost https://www.youtube.com/watch?v=NqdqnfzOQFE&t=1s
 */
const useAxios = (axiosConfig) => {
 const { axiosInstance, method, endPoint, requestConfig = {} } = axiosConfig;

 const [response, setResponse] = useState([]);
 const [isError, setError] = useState("");
 const [isLoading, setLoading] = useState(true);

 useEffect(() => {
  const abortController = new AbortController();

  const fetchData = async () => {
   try {
    const callBack = await axiosInstance[method.toLowerCase()](endPoint, {
     ...requestConfig,
     signal: abortController.signal,
    });
    console.log("UseAxios - Callback", callBack);
    setResponse(callBack.data);
   } catch (err) {
    console.error("UseAxios - Callback error", err.message);
    setError(true);
   } finally {
    setLoading(false);
   }
  };
  fetchData();

  // UseEffect cleanup function
  return () => abortController.abort();
  // eslint-disable-next-line
 }, []);

 return [response, isError, isLoading];
};

export default useAxios;
