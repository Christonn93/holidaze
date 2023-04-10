// Importing React
import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing MUI
import { ThemeProvider } from "@mui/material";

// Importing Theme
import { ColorModeContext, useMode } from "../src/layout/style/theme";

// Importing base layout
import Layout from "./layout/BaseLayout";

// Importing pages
import Home from "./pages/Home";
import NotFound from "./pages/404";

function App() {
 const [theme, colorMode] = useMode();

 return (
  <>
   <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
     <Routes>
      <Route path="/" element={<Layout />}>
       <Route index element={<Home />} />
       <Route path="*" element={<NotFound />} />
      </Route>
     </Routes>
    </ThemeProvider>
   </ColorModeContext.Provider>
  </>
 );
}

export default App;
