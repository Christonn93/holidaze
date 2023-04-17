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
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Venue from "./pages/Venue";
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
       <Route path="login" element={<Login />} />
       <Route path="register" element={<Register />} />
       <Route path="profile" element={<Profile />} />
       <Route path="venue/:id" element={<Venue />} />
       <Route path="*" element={<NotFound />} />
      </Route>
     </Routes>
    </ThemeProvider>
   </ColorModeContext.Provider>
  </>
 );
}

export default App;
