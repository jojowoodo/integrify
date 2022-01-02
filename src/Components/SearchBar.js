import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Button } from "@mui/material";
import { useState } from "react";

const SearchBar = (props) => {
  const [search, setSearch] = useState();
  return (
    <Paper sx={{ display: "flex", alignItems: "center", p:'0.5rem'}}>
      <InputBase
        onChange={(e) => setSearch(e.target.value)}
        sx={{ flex: 1 }}
        placeholder="Search Breweries"
        inputProps={{ "aria-label": "Search Breweries" }}
      />
      <Button onClick={ ()=> props.search(search)}>Search</Button>
    </Paper>
  );
};
export default SearchBar;
