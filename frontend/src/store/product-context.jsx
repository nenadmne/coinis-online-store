import React from "react";

const ProductContext = React.createContext({
  products: [],

  cartItems: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default ProductContext;
