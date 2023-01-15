import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { addToCartAction } from "../Reducer/action";
import styles from "../Styles/product.module.css";

const ProductCard = ({
  id,
  name,
  imageURL,
  price,
  type,
  quantity,
  color,
  gender,
}) => {
  const { state, dispatch } = useContext(AppContext);
  const handleAddToCart = () => {
    const payload = {
      id,
      name,
      imageURL,
      price,
      type,
      quantity,
      color,
      gender,
      qty:1
    };
    dispatch(addToCartAction(payload));
  };
  console.log(state)
  return (
    <div id={styles.card}>
      <h3>{name}</h3>
      <img src={imageURL} alt="" />
      <div id={styles.cartbuttonbox}>
        <h3>Rs {price}</h3>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
