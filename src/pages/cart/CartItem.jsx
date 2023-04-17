import React, { useContext } from "react";
import { ShopContext1 } from "../../context/ShopContext";

const CartItem = ({ product }) => {
  const { id, productName, price, productImage } = product;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext1);
  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            type="text"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
