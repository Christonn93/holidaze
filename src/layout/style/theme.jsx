// Importing React
import { createContext, useState, useMemo } from "react";

// Importing MUI
import { createTheme } from "@mui/material/styles";

/**
 * Looked at a tutorial to create this theme.
 *
 * @YoutubeVideo https://www.youtube.com/watch?v=wYpCWwD1oz0&t=2223s
 * @creator the base layout is created EdRoh. Adjustments have been done to fit my need
 */

// Color tokens
export const tokens = (mode) => ({
 ...(mode === "dark"
  ? {
     grey: {
      100: "#e0e0e0",
      200: "#c2c2c2",
      300: "#a3a3a3",
      400: "#858585",
      500: "#666666",
      600: "#525252",
      700: "#3d3d3d",
      800: "#292929",
      900: "#141414",
     },
     primary: {
      100: "#d0d1d5",
      200: "#a1a4ab",
      300: "#727681",
      400: "#1F2A40",
      500: "#141b2d",
      600: "#101624",
      700: "#0c101b",
      800: "#080b12",
      900: "#040509",
     },
     secondary: {
      100: "#d4d3d7",
      200: "#a8a7ae",
      300: "#7d7b86",
      400: "#514f5d",
      500: "#262335",
      600: "#1e1c2a",
      700: "#171520",
      800: "#0f0e15",
      900: "#08070b",
     },
     greenAccent: {
      100: "#dbf5ee",
      200: "#b7ebde",
      300: "#94e2cd",
      400: "#70d8bd",
      500: "#4cceac",
      600: "#3da58a",
      700: "#2e7c67",
      800: "#1e5245",
      900: "#0f2922",
     },
     redAccent: {
      100: "#f2d1cf",
      200: "#e5a2a0",
      300: "#d97470",
      400: "#cc4541",
      500: "#bf1711",
      600: "#99120e",
      700: "#730e0a",
      800: "#4c0907",
      900: "#260503",
     },
     blueAccent: {
      100: "#000914",
      200: "#001228",
      300: "#001c3b",
      400: "#00254f",
      500: "#002e63",
      600: "#335882",
      700: "#6682a1",
      800: "#99abc1",
      900: "#ccd5e0",
     },
    }
  : {
     grey: {
      100: "#141414",
      200: "#292929",
      300: "#3d3d3d",
      400: "#525252",
      500: "#666666",
      600: "#858585",
      700: "#a3a3a3",
      800: "#c2c2c2",
      900: "#e0e0e0",
     },
     primary: {
      100: "#040509",
      200: "#080b12",
      300: "#0c101b",
      400: "#f2f0f0", // manually changed
      500: "#141b2d",
      600: "#1F2A40",
      700: "#727681",
      800: "#a1a4ab",
      900: "#d0d1d5",
     },
     greenAccent: {
      100: "#0f2922",
      200: "#1e5245",
      300: "#2e7c67",
      400: "#3da58a",
      500: "#4cceac",
      600: "#70d8bd",
      700: "#94e2cd",
      800: "#b7ebde",
      900: "#dbf5ee",
     },
     redAccent: {
      100: "#260503",
      200: "#4c0907",
      300: "#730e0a",
      400: "#99120e",
      500: "#bf1711",
      600: "#cc4541",
      700: "#d97470",
      800: "#e5a2a0",
      900: "#f2d1cf",
     },
     blueAccent: {
      100: "#ccd5e0",
      200: "#99abc1",
      300: "#6682a1",
      400: "#335882",
      500: "#002e63",
      600: "#00254f",
      700: "#001c3b",
      800: "#001228",
      900: "#000914",
     },
    }),
});

// MUI Theme settings
export const themeSettings = (mode) => {
 const colors = tokens(mode);

 return {
  palette: {
   mode: mode,
   ...(mode === "dark"
    ? {
       primary: {
        main: colors.primary[500],
       },
       secondary: {
        main: colors.greenAccent[500],
       },
       cta: {
        main: colors.redAccent[500],
       },
       ctaSuccess: {
        main: colors.greenAccent[300],
       },
       neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
       },
       background: {
        default: "#253f58",
       },
       text: {
        main: "#000",
        secondary: "#fff",
       },
       navText: {
        main: colors.greenAccent[500],
       },
       input: {
        main: "#000",
       },
      }
    : {
       primary: {
        main: colors.primary[100],
       },
       secondary: {
        main: colors.greenAccent[500],
       },
       cta: {
        main: colors.redAccent[500],
       },
       ctaSuccess: {
        main: colors.greenAccent[700],
       },
       neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
       },
       background: {
        default: "#e3e3e3",
       },
       text: {
        main: "#000",
        secondary: "#fff",
       },
       navText: {
        main: "#000",
       },
       input: {
        main: "#000",
       },
      }),
  },
  typography: {
   fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
   fontSize: 12,
   h1: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 40,
   },
   h2: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 32,
   },
   h3: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 20,
   },
   h4: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 20,
   },
   h5: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 16,
   },
   h6: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 14,
   },
  },
  textField: {
   width: "90%",
   marginLeft: "auto",
   marginRight: "auto",
   paddingBottom: 0,
   marginTop: 0,
   fontWeight: 500,
  },
 };
};

// Color mode context
export const ColorModeContext = createContext({
 toggleColorMode: () => {},
});

export const useMode = () => {
 const [mode, setMode] = useState("dark");

 const colorMode = useMemo(
  () => ({
   toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
  }),
  []
 );

 const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
 return [theme, colorMode];
};
