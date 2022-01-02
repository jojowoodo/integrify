import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


const BreweryDetails = () => {
  const navigate = useNavigate();
  const { breweryId } = useParams();
  const [brewery, setBrewery] = useState();
  useEffect(() => {
    if (!brewery) {
      fetch(`https://api.openbrewerydb.org/breweries/${breweryId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setBrewery(data);
        });
    }
  });
  if (!brewery) {
    return <div>Loading...</div>;
  }

  function goBack() {
    navigate(-1);
  }
  return (
    <Container maxWidth="sm">
      <Grid container alignItems="center" style={{ minHeight: "100vh" }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {brewery.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {brewery.brewery_type}
            </Typography>
            <Typography>{brewery.street}</Typography>
            <Typography>{brewery.address_2}</Typography>
            <Typography>{brewery.address_3}</Typography>
            <Typography>{brewery.city}</Typography>
            <Typography>{brewery.state}</Typography>
            <Typography>{brewery.county_province}</Typography>
            <Typography>{brewery.postal_code}</Typography>
          </CardContent>
          <CardActions>
            <Button onClick={goBack}>Go back</Button>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
};
export default BreweryDetails;