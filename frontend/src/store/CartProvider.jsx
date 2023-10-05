import { useEffect, useReducer, useState } from "react";
import CartContext from "./product-context";
import getProducts from "../api/apiCalls/getProducts";

const defaultCartState = {
  cartItems: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.cartItems[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.cartItems];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.cartItems.concat(action.item);
    }

    return {
      cartItems: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.cartItems[existingCartItemIndex];
    let updatedTotalAmount = state.totalAmount;
    let updatedItems;

    if (existingItem.amount === 1 || existingItem.amount <= action.quantity) {
      updatedItems = state.cartItems.filter((item) => item.id !== action.id);
      updatedTotalAmount =
        state.totalAmount - existingItem.price * existingItem.amount;
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - action.quantity,
      };
      updatedItems = [...state.cartItems];
      updatedItems[existingCartItemIndex] = updatedItem;
      updatedTotalAmount =
        state.totalAmount - existingItem.price * action.quantity;
    }

    return {
      cartItems: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id, quantity) => {
    dispatchCartAction({ type: "REMOVE", id: id, quantity: quantity });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const productData = await getProducts();
        setProducts(productData);
        setFilteredData(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchData();
  }, []);

  const addProductHandler = (item) => {
    setProducts((prevData) => [
      { ...item, id: prevData.length + 1 },
      ...prevData,
    ]);
  };

  const editedProductHandler = (item, slug) => {
    setProducts((prevData) => {
      const editedData = prevData.map((prod) =>
        prod.id === item.id ? item : prod
      );
      return [...editedData];
    });
  };

  const filterHandler = (value) => {
    setFilteredData(value);
  };

  const productContext = {
    products: products,
    submitProduct: addProductHandler,
    editedProduct: editedProductHandler,

    filteredProducts: filteredData,
    filterHandler: filterHandler,

    cartItems: cartState.cartItems,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={productContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ProductProvider;
