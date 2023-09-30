import React, { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const SearchBar = () => {
  const [searchRestaurants, setSearchRestaurants] = useState("");
  const [filteredItems, setFilteredItems] = useState(resList);

  const handleInputChange = (event) => {
    setSearchRestaurants(event.target.value);
  };

  const handleSearch = () => {
    // console.log("Searching for:", searchRestaurants);
    const filtered = resList.filter((restaurant) =>
      restaurant.info.name
        .toLowerCase()
        .includes(searchRestaurants.toLowerCase())
    );

    setFilteredItems(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Restaurants"
        value={searchRestaurants}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="res-container">
        {filteredItems.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
