import React from "react";

const ProductContext = React.createContext({
  products: [],
  submitProduct: (item) => {},
  editedProduct: (item) => {},
  
  filteredProducts: [],
  filterHandler: (items) => {},

  cartItems: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default ProductContext;
