import React, { useState } from "react";
import "./Search.css";

function SearchBar({ placeholder, data }) {

  const [filteredData, setFilteredData]=useState([]);
  const handleFilter =(event)=> {
    const searchWord=event.target.value
    const newFilter =data.filter((value)=>{
      return value.title.toLowerCase().includes(searchWord);
    });
    setFilteredData(newFilter);
    if (searchWord ===""){
      setFilteredData([]);
    }
    else {
      setFilteredData(newFilter);
    }
  };
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
        <div className="searchIcon"></div>
      </div>
      {filteredData.length !== 0 &&(
      <div className="dataResult">
        {filteredData.slice(0,15).map((value, key) => {
          return (
            <a className="dataItem" href={value.link} target="_ blank">
              <p>{value.title}</p>
            </a>
          );
        })}
      </div>
      )}
    </div>
  );
}

export default SearchBar;
