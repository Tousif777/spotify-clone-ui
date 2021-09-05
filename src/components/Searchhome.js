import React from "react";
import Searchtop from "./Searchtop";
import "./Home.css";
import BrowseCard from "./Browsecard";

const Searchhome = () => {
  return (
    <div className="body">
      <Searchtop />
      <br />
      <BrowseCard />
    </div>
  );
};

export default Searchhome;
