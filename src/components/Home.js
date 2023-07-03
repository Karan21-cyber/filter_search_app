import React from "react";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import ItemLists from "./ItemLists";
import { Divider } from "@mui/material";

function Home() {
  return (
    <div className="home">
      <SearchBar />

      <Divider />
      <div className="home-container">
        <SideBar />
        <ItemLists />
      </div>
    </div>
  );
}

export default Home;
