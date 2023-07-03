import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { Box } from '@mui/material';

function SearchBar({search, handleSearch}) {
  return (
    <div className="search-container">
      <Box
        border="1px solid gray"
        height="30px"
        marginTop="15px"
        borderRadius="10px"
        width="400px"
      >
        <SearchIcon sx={{ fontSize: 25,padding:"5px" }} />
        <input type="text" placeholder="Search..." className="search-box" 
          value={search}
          onChange={handleSearch}
        />  
      </Box>
    </div>
  );
}

export default SearchBar