import React, { useContext } from "react";
// import { useProductContext } from "../Context/FilterContext";
import { ImCross } from "react-icons/im";
import { AppContext } from "../Context/AppContext";
import { useFilterContext } from "../Context/FilterContext";
import "../Styles/filter.css";

const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type])
    return [...new Set(unique)]
  }

const FilterComponent = () => {
    
    const {state,closeSidebar} = useContext(AppContext)
  const { product, isSidebarOpen} = state;
  const data = product
  const {updateFilter,filter,clearFilter}= useFilterContext()
  const colors = getUniqueValues(data, "color");
  const types = getUniqueValues(data, "type");
  return (
    <div className="filter-container" style={{left:`${isSidebarOpen?"0":"-500px"}`}}>
      <h3 style={{float:"right",paddingRight:"50px"}} onClick={closeSidebar}><ImCross /></h3>
      <h2>Filter products</h2>
      <div>
        <h3>Color</h3>
        <ul>
          {colors.map((item, i) => (
            <li key={i}>
              <input type="checkbox" name="" id="" value={item} onChange={()=>updateFilter("colors",item)} />
              <label htmlFor="">{item}</label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Gender</h3>
        <ul>
          <li>
            <input type="checkbox" name="" id=""  value="Men" onChange={()=>updateFilter("gender","Men")}/>
            <label htmlFor="">Men</label>
          </li>
          <li>
            <input type="checkbox" name="" id="" value="Women" onChange={()=>updateFilter("gender","Women")} />
            <label htmlFor="">Women</label>
          </li>
        </ul>
      </div>
      <div>
        <h3>Type</h3>
        <ul>
          {types.map((item, i) => (
            <li key={i}>
              <input type="checkbox" name="" id="" value={item} onChange={()=>updateFilter("types",item)}/>
              <label htmlFor="">{item}</label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Price Range</h3>
        <input type="range" name="" id="" onChange={()=>updateFilter("price")}/>
      </div>
      <button className="clear-button" onClick={filter}>Add Filters</button>
      <button className="clear-button"onClick={clearFilter}>Clear Filters</button>
    </div>
  );
};

export default FilterComponent;