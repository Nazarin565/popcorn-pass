import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { BrowserRouter } from "react-router";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </LocalizationProvider>
);
