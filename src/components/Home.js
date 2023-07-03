import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import ItemLists from "./ItemLists";
import { Divider } from "@mui/material";
import { dataList, cuisines } from "../constants/data";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(10000);
  const amount = 10000;

  const [cuisine, setCuisines] = useState(cuisines);

  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const handleSelectedCategory = (value) => {
    setSelectedCategory(value);
  };

  const handleSelectedRating = (value) => {
    setSelectedRating(value);
  };

  const handleChangeChecked = (id) => {
    const cuisineList = cuisine;
    const cuisines = cuisineList.map((data) => {
      if (data.id === id) {
        return { ...data, checked: !data.checked };
      } else {
        return data;
      }
    });
    setCuisines(cuisines);
  };

  const handleChangePrice = (event, newValue) => {
    setSelectedPrice(parseInt(amount * (newValue / 100)));
  };

  // applying the filters
  const applyFilter = () => {
    let updatedList = dataList;

    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // Category Filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    // cuisin Filter

    const cuisinesChecked = cuisine
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisinesChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisinesChecked.includes(item.cuisine)
      );
    }

    // search Filter

    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    const minPrice = 0;
    const maxPrice = selectedPrice;
    if (selectedPrice) {
      updatedList = updatedList.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );
    }

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilter();
  }, [selectedRating, selectedCategory, selectedPrice, cuisine, searchInput]);


  return (
    <div className="home">
      <SearchBar
        search={searchInput}
        handleSearch={(e) => setSearchInput(e.target.value)}
      />

      <Divider />
      <div className="home-container">
        <SideBar
          category={selectedCategory}
          handleCategory={handleSelectedCategory}
          rating={selectedRating}
          handleRating={handleSelectedRating}
          price={selectedPrice}
          handlePrice={handleChangePrice}
          cuisines={cuisine}
          handleChecked={handleChangeChecked}
        />
        {resultsFound ? <ItemLists dataList={list} /> : "No Data Found!"}
      </div>
    </div>
  );
}

export default Home;
