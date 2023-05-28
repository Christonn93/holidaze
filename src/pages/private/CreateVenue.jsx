// Importing React
import React from "react";

// Importing Components
import HeroCreateNewListing from "../../components/Hero/HeroCreateNewListing";
import VenueForm from "../../components/Form/VenueForm";

const CreateVenue = () => {
 return (
  <>
   <HeroCreateNewListing />
   <VenueForm state={"new"} />
  </>
 );
};

export default CreateVenue;
