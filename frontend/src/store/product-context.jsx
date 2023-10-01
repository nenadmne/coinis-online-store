import React from "react";

const ProductContext = React.createContext({
  products: [],
  searchedProducts: [],
  searchProducts: (items) => {},
  categoryProducts: (items) => {},

  cartItems: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default ProductContext;
