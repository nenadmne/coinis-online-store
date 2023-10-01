import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { useContext } from "react";
import CartContext from "../../../../../store/product-context";
import "./ShoppingCart.css";
import PayOptions from "./PayOptions/PayOptions";
import Summary from "./Summary/Summary";
import CartItem from "./CartItem/CartItem";

export default function ShopingCart() {
  const cartCtx = useContext(CartContext);
  const productQuantity = cartCtx.cartItems.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);

  return (
    <section className="h-100 gradient-custom">
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center my-4">
          <MDBCol md="8">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                  {`Cart - ${productQuantity} products`}
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody className="cart-items-wrapper">
                {cartCtx.cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </MDBCardBody>
            </MDBCard>
            <PayOptions />
          </MDBCol>
          <Summary />
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
