import React, { useContext } from "react";
import { ShopContext1 } from "../../context/ShopContext";
const Product = ({ product }) => {
  const { id, productName, price, productImage } = product;

  const { addToCart, cartItems } = useContext(ShopContext1);

  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;
