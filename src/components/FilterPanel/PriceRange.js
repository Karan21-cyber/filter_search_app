import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function PriceRange({price, handleChangePrice}) {

  return (
    <Box sx={{ width: 300 , display:"flex",justifyContent:"space-around" }}>
      <p>0</p>
      <Slider
        sx={{width:"200px",marginTop:"8px"}}
        aria-label="Temperature"
        defaultValue={price}
        getAriaValueText={valuetext}
        color="secondary"
        onChange = {handleChangePrice}
      />
      <p>{price}</p>
    </Box>
  );
}
