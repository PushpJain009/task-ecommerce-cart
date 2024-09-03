import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="cart-item">
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => handleRemove(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
