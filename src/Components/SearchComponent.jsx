import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import styles from "../Styles/product.module.css";
import { FaFilter } from "react-icons/fa";

const SearchComponent = () => {
  const { openSidebar } = useContext(AppContext);
  const [text ,setText] = useState("")
  return (
    <div>
      <div className="filter-div" onClick={openSidebar}>
        <FaFilter size="25px" color="darkgreen" />
        <input type="text" placeholder="Search" id={styles.search} onChange={(e)=> setText(e.target.value)}/>
      </div>
    </div>
  );
};

export default SearchComponent;
