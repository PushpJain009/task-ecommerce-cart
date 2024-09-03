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

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
