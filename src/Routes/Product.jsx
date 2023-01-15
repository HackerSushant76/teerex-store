import React from "react";
import FilterComponent from "../Components/FilterComponent";
import ProductCard from "../Components/ProductCard";
import SearchComponent from "../Components/SearchComponent";
import { useFilterContext } from "../Context/FilterContext";
import styles from "../Styles/product.module.css";

const Product = () => {
//   const { state } = useContext(AppContext);
  const {filteredData} = useFilterContext()
    // console.log(state);
  return (
    <div>
      <div>
        <SearchComponent />
      </div>
      <div id={styles.products}>
        <FilterComponent />
        <div id={styles.product_grid}>
          {filteredData?.map((elem) => (
            <ProductCard key={elem.id} {...elem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
