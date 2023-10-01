import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBRow } from "mdb-react-ui-kit";
import React from "react";
import ItemImage from "./ItemImage/ItemImage";
import ItemProduct from "./ItemProduct/ItemProduct";
import ItemQuantity from "./ItemQuantity/ItemQuantity";
import "./CartItem.css";

export default function CartItem({ item }) {
  return (
    <MDBRow className="row-wrapper">
      <ItemImage thumbnail={item.thumbnail} />
      <ItemProduct item={item} />
      <ItemQuantity item={item}/>
    </MDBRow>
  );
}
