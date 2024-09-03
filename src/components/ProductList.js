import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slices/productSlice";
import { addToCart } from "../slices/cartSlice";
import { Link } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
            </Link>
            <p>${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
