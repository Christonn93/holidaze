import React from "react";

import { Button, FormGroup, TextField } from "@mui/material";

const ImageForm = ({ handleSubmit }) => {
 return (
  <form onSubmit={handleSubmit}>
   <FormGroup>
    <TextField name="media" variant="outlined" fullWidth />
   </FormGroup>
   <Button variant="primary" type="submit">
    Add image
   </Button>
  </form>
 );
};

export default ImageForm;
