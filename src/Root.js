import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import ChoosePlaces from "./components/ChoosePlaces";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Root = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="choose-places" element={<ChoosePlaces />} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
};

export default Root;
