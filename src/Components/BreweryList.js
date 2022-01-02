import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import BreweryCard from "./BreweryCard";
import { CircularProgress, Container, Grid } from "@mui/material";
import SearchBar from "./SearchBar";
import Typography from "@mui/material/Typography";

export default function BreweryList() {
  const [loading, setLoading] = useState(false);
  const [brewery, setBrewery] = useState([]); // array of breweries

  const getBreweries = (searchString) => {
    // get breweries from API instead of locally filtering it with lodash
    setLoading(true);
    fetch(
      `https://api.openbrewerydb.org/breweries/search?query=${searchString}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBrewery(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const colors = [
    "#9965f4",
    "#aaf255",
    "#916eff",
    "#df55f2",
    "#ef4fa6",
    "#ffaf49",
  ];
  const breweryCards = brewery.map((brewery, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <BreweryCard
        color={colors[Math.floor(Math.random() * colors.length)]}
        key={index}
        brewery={brewery}
      />
    </Grid>
  ));

  return (
    <Container maxWidth="xl">
      <Box sx={{ minWidth: "275" }}>
        <SearchBar search={getBreweries} />
      </Box>
      <Grid container spacing={4} sx={{ my: "2rem" }}>
        {loading ? (
          <Grid item xs={12} sm={6} md={4}>
            <CircularProgress />
          </Grid>
        ) : breweryCards?.length > 0 ? (
          breweryCards
        ) : (
          <Grid item xs={12}>
            <Typography variant="h4">No results</Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
