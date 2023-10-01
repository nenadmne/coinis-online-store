import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";
import { MDBBtn, MDBIcon, MDBInput, MDBRow } from "mdb-react-ui-kit";
import { useContext } from "react";
import CartContext from "../../../../../../../store/product-context";
import "./ItemQuantity.css";

export default function ItemQuantity({ item }) {
  const [value, setValue] = useState(1);
  const valueHandler = (event) => {
    setValue(event.target.value);
  };
  const cartCtx = useContext(CartContext);
  const { addItem, removeItem } = cartCtx;

  return (
    <MDBRow className="quantity-row">
      <div className="quantity-wrapper" style={{ maxWidth: "300px" }}>
        <MDBBtn
          onClick={() => removeItem(item.id, value)}
          className="px-3 me-2"
          noRipple={true}
        >
          <MDBIcon fas icon="minus" />
        </MDBBtn>
        <MDBInput value={value} onChange={valueHandler} min={1} type="number" className="quantity-input" />
        <MDBBtn
          onClick={() => addItem({ ...item, amount: +value })}
          className="px-3 me-2"
          noRipple={true}
        >
          <MDBIcon fas icon="plus" />
        </MDBBtn>
      </div>
    </MDBRow>
  );
}
