import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BreweryList from "./Components/BreweryList";
import BreweryDetails from "./Components/BreweryDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BreweryList />}/>
        <Route path="/:breweryId" element={<BreweryDetails />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
