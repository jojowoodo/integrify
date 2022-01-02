import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';



const SearchBar = () => {
  return (
    <Paper sx={{ display: "flex", alignItems: "center" }}>
      <InputBase
        sx={{ flex: 1 }}
        placeholder="Search Breweries"
        inputProps={{ "aria-label": "Search Breweries" }}
      />
      <IconButton sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
export default SearchBar;
