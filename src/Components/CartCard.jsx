import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import styles from "../Styles/cart.module.css";

const CartCard = ({id, imageURL, name, price ,handleQty,qty , handleDelete}) => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div id={styles.cartcard}>
      <img src={imageURL} alt="" />
      <div>
        <h3>{name}</h3>
        <h3>{price}</h3>
      </div>
      <div id={styles.qtybox}>
        <p onClick={() => handleQty(id,-1)}>-</p>
        <p>Qty:{qty}</p>
        <p onClick={() => handleQty(id,+1)}>+</p>
      </div>
      <button id={styles.delbut} onClick = {()=> handleDelete(id)}>Delete</button>
    </div>
  );
};

export default CartCard;
