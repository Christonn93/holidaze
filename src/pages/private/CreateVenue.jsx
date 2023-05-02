// Importing React
import React from "react";

// Importing Components
import HeroCreateNewListing from "../../components/Hero/HeroCreateNewListing";
import CreateNewVenue from "../../components/Form/CreateNewVenue";

const CreateVenue = () => {
 console.clear();

 return (
  <>
   <HeroCreateNewListing />
   <CreateNewVenue />
  </>
 );
};

export default CreateVenue;
