import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import BreweryCard from "./BreweryCard";
import { Container, Grid } from "@mui/material";
import SearchBar from "./SearchBar";

export default function BreweryList() {
  const [emptyResult, setEmptyResult] = useState(false); // this is the state
  const [brewery, setBrewery] = useState([]); // array of breweries
  const [input, setInput] = useState(""); // input from user
  const [loading, setLoading] = useState(false); // loading state

  const getBreweries = (searchString) => {
    fetch(`https://api.openbrewerydb.org/breweries/search?query=${searchString}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        setTimeout(function () {
          // this is a timeout function if the array is empty
          if (data.length < 1) {
            setEmptyResult(true); // if the array is empty, set the state to true (no results)
          }
          setBrewery(data); // set the state to the array of breweries
          setLoading(false); // set the loading state to false
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const breweryCards = brewery.map((brewery, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <BreweryCard key={index} brewery={brewery} />
    </Grid>
  ));

  return (
    <Container maxWidth="xl">
      <Box sx={{ minWidth: "275" }}>
        <SearchBar/>
      </Box>
      <Grid container spacing={4}>
        {breweryCards}
      </Grid>
    </Container>
  );
}
