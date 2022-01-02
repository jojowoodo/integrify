import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";


const BreweryCard = (props) => {
  let navigate = useNavigate();

  function openDetails() {
    navigate(`/${props.brewery.id}`);
  }
  return (
  <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography variant="h5" component="h2">
        {props.brewery.name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.brewery.brewery_type}
      </Typography>
      <Typography>{props.brewery.city}</Typography>
    </CardContent>
    <CardActions>
      <Button onClick={openDetails}>View Detail</Button>
    </CardActions>
  </Card>
  )};
export default BreweryCard;
