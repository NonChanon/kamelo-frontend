import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";

const theme = {
  button: {
    defaultProps: {
      color: "primary",
    },
    valid: {
      colors: ["primary", "secondary"],
    },
    styles: {
      variants: {
        filled: {
          primary: {
            background: "bg-primary",
            color: "text-white",
          },
          secondary: {
            background: "bg-secondary",
            color: "text-black",
          },
        },
        outlined: {
          primary: {
            border: "border border-primary",
            color: "text-primary",
          },
        },
        gradient: {
          primary: {
            background: "bg-primary",
            color: "text-white",
          },
        },
        text: {
          primary: {
            color: "text-primary",
          },
        },
      },
    },
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider value={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
