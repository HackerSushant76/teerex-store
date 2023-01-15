import React from "react";
import { useContext } from "react";
import CartCard from "../Components/CartCard";
import { AppContext } from "../Context/AppContext";
import { changeQuantityAction, deleteCartItem } from "../Reducer/action";
import styles from "../Styles/cart.module.css";

const Cart = () => {
  const { state, dispatch } = useContext(AppContext);
  console.log(state.cart);
  const { cart } = state;
  const handleQty = (id, payload) => {
    const updatedData = cart.map((elem) => {
      if (elem.id === id) {
        if (elem.qty === 0 && payload === -1) {
          return elem;
        }
        if (elem.quantity > 0) {
          return {
            ...elem,
            qty: elem.qty + payload,
            quantity: elem.quantity - payload,
          };
        } else if (elem.quantity === 0 && payload === -1) {
          return {
            ...elem,
            qty: elem.qty + payload,
            quantity: elem.quantity - payload,
          };
        } else {
          alert("Error !! out of stock");
          return elem;
        }
      } else {
        return elem;
      }
    });
    dispatch(changeQuantityAction(updatedData));
  };

  const total = cart.reduce((acc, c) => acc + c.price * c.qty, 0);
  const handleDelete = (id)=>{
    const updatedData = cart.filter(elem => {
       return  elem.id !==id
    })
    dispatch(deleteCartItem(updatedData))
  }
  return (
    <div id={styles.cart}>
      {state.cart?.map((elem) => (
        <CartCard key={elem.id} {...elem} handleQty={handleQty} handleDelete = {handleDelete}/>
      ))}
      <br />
      <hr />
      <br />
      <h2>Total: {total}</h2>
    </div>
  );
};

export default Cart;
