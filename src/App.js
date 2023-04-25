// Importing React
import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing MUI
import { CssBaseline, ThemeProvider } from "@mui/material";

// Importing layout, theme and style
import Layout from "./layout/BaseLayout";
import { ColorModeContext, useMode } from "../src/style/theme";
import "../src/style/defaultStyle.css";

// Importing context and auth
import RequireAuth from "./auth/RequireAuth";
import { AuthProvider } from "./context/AuthProvider";
import { VenueProvider } from "./context/venueContext";

// Importing components

/* == Importing pages == */

// Public pages
import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import Venue from "./pages/public/Venue";
import RouteNotFound from "./pages/public/404";

// Private pages
import Profile from "./pages/private/Profile";
import PrivVenue from "./pages/private/PrivVenue";
import CreateVenue from "./pages/private/CreateVenue";
import TestingNewComponents from "./pages/private/TestingNewComponents";
import SearchResult from "./pages/public/SearchResult";

function App() {
 const [theme, colorMode] = useMode();

 return (
  <>
   <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
     <CssBaseline />
     <AuthProvider>
      <VenueProvider>
       <Routes>
        <Route path="/" element={<Layout />}>
         {/* Public routes */}
         <Route index element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/venue/:id" element={<Venue />} />
         <Route path="/search/:params" element={<SearchResult />} />
         <Route path="*" element={<RouteNotFound />} />

         {/* Private routes routes */}
         <Route element={<RequireAuth />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/venue/:id/edit" element={<PrivVenue />} />
          <Route path="/venue/create" element={<CreateVenue />} />
          <Route path="/testing" element={<TestingNewComponents />} />
         </Route>
        </Route>
       </Routes>
      </VenueProvider>
     </AuthProvider>
    </ThemeProvider>
   </ColorModeContext.Provider>
  </>
 );
}

export default App;
