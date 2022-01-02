import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BreweryList from "./Components/BreweryList";
import BreweryDetails from "./Components/BreweryDetails";
import { Box } from "@mui/system";

function App() {
  return (
    <Box
      sx={{
        backgroundColor: "Beige",
        minHeight: "100vh",
        height: "100%",
        p: "2rem",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BreweryList />} />
          <Route path="/:breweryId" element={<BreweryDetails />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
export default App;
