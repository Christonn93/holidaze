import { createSearchParams } from "react-router-dom";

export const encodeSearchParams = (params) => createSearchParams(params);

export const decodeSearchParams = (searchParams) => {
 return [...searchParams].reduce((acc, [key, val]) => {
  try {
   return {
    ...acc,
    [key]: JSON.parse(val),
   };
  } catch {
   return {
    ...acc,
    [key]: val,
   };
  }
 }, {});
};
