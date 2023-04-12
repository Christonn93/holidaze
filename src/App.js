// Importing React
import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing MUI
import { CssBaseline, ThemeProvider } from "@mui/material";

// Importing Theme
import { ColorModeContext, useMode } from "../src/layout/style/theme";
import "../src/layout/style/defaultStyle.css";

// Importing base layout
import Layout from "./layout/BaseLayout";

// Importing pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/404";

function App() {
 const [theme, colorMode] = useMode();

 return (
  <>
   <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
     <Routes>
      <Route path="/" element={<Layout />}>
       <Route index element={<Home />} />
       <Route element={<Profile />} />
       <Route path="*" element={<NotFound />} />
      </Route>
     </Routes>
    </ThemeProvider>
   </ColorModeContext.Provider>
  </>
 );
}

export default App;
