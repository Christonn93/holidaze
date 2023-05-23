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
     primary: {
      100: "#002530",
      200: "#004a60",
      300: "#01708f",
      400: "#0195bf",
      500: "#01baef",
      600: "#34c8f2",
      700: "#67d6f5",
      800: "#99e3f9",
      900: "#ccf1fc",
     },
     secondary: {
      100: "#331000",
      200: "#662000",
      300: "#983001",
      400: "#cb4001",
      500: "#fe5001",
      600: "#fe7334",
      700: "#fe9667",
      800: "#ffb999",
      900: "#ffdccc",
     },
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
     orangeAccent: {
      100: "#321b00",
      200: "#643500",
      300: "#975000",
      400: "#c96a00",
      500: "#fb8500",
      600: "#fc9d33",
      700: "#fdb666",
      800: "#fdce99",
      900: "#fee7cc",
     },
     greenAccent: {
      100: "#0f291a",
      200: "#1e5333",
      300: "#2e7c4d",
      400: "#3da666",
      500: "#4ccf80",
      600: "#70d999",
      700: "#94e2b3",
      800: "#b7eccc",
      900: "#dbf5e6",
     },
     redAccent: {
      100: "#301312",
      200: "#612625",
      300: "#913937",
      400: "#c24c4a",
      500: "#f25f5c",
      600: "#f57f7d",
      700: "#f79f9d",
      800: "#fabfbe",
      900: "#fcdfde",
     },
     blueAccent: {
      100: "#071920",
      200: "#0e3140",
      300: "#164a60",
      400: "#1d6280",
      500: "#247ba0",
      600: "#5095b3",
      700: "#7cb0c6",
      800: "#a7cad9",
      900: "#d3e5ec",
     },
    }
  : {
     primary: {
      100: "#ccf1fc",
      200: "#99e3f9",
      300: "#67d6f5",
      400: "#34c8f2",
      500: "#01baef",
      600: "#0195bf",
      700: "#01708f",
      800: "#004a60",
      900: "#002530",
     },
     secondary: {
      100: "#ffdccc",
      200: "#ffb999",
      300: "#fe9667",
      400: "#fe7334",
      500: "#fe5001",
      600: "#cb4001",
      700: "#983001",
      800: "#662000",
      900: "#331000",
     },
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

     orangeAccent: {
      100: "#fee7cc",
      200: "#fdce99",
      300: "#fdb666",
      400: "#fc9d33",
      500: "#fb8500",
      600: "#c96a00",
      700: "#975000",
      800: "#643500",
      900: "#321b00",
     },
     greenAccent: {
      100: "#dbf5e6",
      200: "#b7eccc",
      300: "#94e2b3",
      400: "#70d999",
      500: "#4ccf80",
      600: "#3da666",
      700: "#2e7c4d",
      800: "#1e5333",
      900: "#0f291a",
     },
     redAccent: {
      100: "#fcdfde",
      200: "#fabfbe",
      300: "#f79f9d",
      400: "#f57f7d",
      500: "#f25f5c",
      600: "#c24c4a",
      700: "#913937",
      800: "#612625",
      900: "#301312",
     },
     blueAccent: {
      100: "#d3e5ec",
      200: "#a7cad9",
      300: "#7cb0c6",
      400: "#5095b3",
      500: "#247ba0",
      600: "#1d6280",
      700: "#164a60",
      800: "#0e3140",
      900: "#071920",
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
        main: colors.secondary[500],
       },
       neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
       },
       background: {
        default: "#253f58",
       },
       primaryButton: {
        main: colors.primary[500],
       },
       secondaryButton: {
        main: colors.secondary[500],
       },
       NavigationLink: {
        main: colors.secondary[500],
       },
      }
    : {
       primary: {
        main: colors.primary[500],
       },
       secondary: {
        main: colors.secondary[500],
       },
       neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
       },
       background: {
        default: "#FDFFFC",
       },
       primaryButton: {
        main: colors.primary[500],
       },
       secondaryButton: {
        main: colors.secondary[500],
       },
       NavigationLink: {
        main: colors.secondary[500],
       },
      }),
  },
  typography: {
   fontFamily: ["Anonymous Pro", "monospace"].join(","),
   fontSize: 16,
   h1: {
    fontFamily: ["Kameron", "serif"].join(","),
    fontSize: 48,
   },
   h2: {
    fontFamily: ["Kameron", "serif"].join(","),
    fontSize: 38,
   },
   h3: {
    fontFamily: ["Kameron", "serif"].join(","),
    fontSize: 35,
   },
   h4: {
    fontFamily: ["Kameron", "serif"].join(","),
    fontSize: 32,
   },
   h5: {
    fontFamily: ["Kameron", "serif"].join(","),
    fontSize: 24,
   },
   h6: {
    fontFamily: ["Kameron", "serif"].join(","),
    fontSize: 20,
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
  components: {
   MuiDatePicker: {
    styleOverrides: {
     root: {
      backgroundColor: "#f25f5c",
     },
    },
   },
   MuiTextField: {
    styleOverrides: {
     root: {
      borderColor: colors.primary[500],
      "& .MuiOutlinedInput-root": {
       "& fieldset": {
        borderColor: colors.primary[500],
       },
       "&:hover fieldset": {
        borderColor: colors.greenAccent[500],
       },
       "&.Mui-focused fieldset": {
        borderColor: colors.primary[500],
       },
      },
     },
    },
   },
   MuiCheckbox: {
    styleOverrides: {
     root: {
      borderColor: colors.primary[500],
      "& .MuiCheckbox-root": {
       "& fieldset": {
        borderColor: colors.primary[500],
       },
       "&:hover fieldset": {
        borderColor: colors.greenAccent[500],
       },
       "&.Mui-focused fieldset": {
        borderColor: colors.secondary[500],
       },
      },
     },
    },
   },
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
