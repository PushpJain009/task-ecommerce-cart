import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === parseInt(id))
  );
  const dispatch = useDispatch();

  if (!product) return <div>No Product Found</div>;

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="add-to-cart-button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
