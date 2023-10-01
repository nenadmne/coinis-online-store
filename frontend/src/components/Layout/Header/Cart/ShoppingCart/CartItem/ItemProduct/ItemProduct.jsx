import "@fortawesome/fontawesome-free/css/all.min.css";
import { useContext } from "react";
import CartContext from "../../../../../../../store/product-context";
import { MDBBtn, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import "./ItemProduct.css";

export default function ItemProduct({ item }) {
  const cartCtx = useContext(CartContext);
  const { cartItems, removeItem } = cartCtx;

  const amount = cartItems
    .filter((prod) => prod.id === item.id)
    .map((item) => item.amount);

  return (
    <MDBCol lg="5" className="cart-item-info">
      <p className="cart-info-title">{item.title}</p>
      <p className="cart-info-amount">
        Amount: <strong>{amount}</strong>
      </p>
      <p className="cart-info-price">${item.price}</p>

      <MDBBtn
        wrapperProps={{ size: "sm" }}
        wrapperClass="cart-trash"
        className="cart-trash"
        title="Remove item"
        onClick={() => removeItem(item.id, amount)}
        noRipple={true}
      >
        <MDBIcon fas icon="trash" />
      </MDBBtn>
    </MDBCol>
  );
}
