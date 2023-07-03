import React,{useState} from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function PriceRange() {
  const amount = 10000;
  const [price , setPrice] = useState(amount);
  
  const handleProgress = (event , newValue) => {
    setPrice(parseInt(amount * (newValue/100)));
  }

  return (
    <Box sx={{ width: 300 , display:"flex",justifyContent:"space-around" }}>
      <p>0</p>
      <Slider
        sx={{width:"200px",marginTop:"8px"}}
        aria-label="Temperature"
        defaultValue={price}
        getAriaValueText={valuetext}
        color="secondary"
        onChange = {handleProgress}
      />
      <p>{price}</p>
    </Box>
  );
}
