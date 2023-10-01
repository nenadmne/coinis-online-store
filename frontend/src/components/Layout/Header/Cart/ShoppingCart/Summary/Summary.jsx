import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { useContext } from "react";
import CartContext from "../../../../../../store/product-context";
import "../ShoppingCart.css";

export default function Summary() {
  const cartCtx = useContext(CartContext);

  return (
    <MDBCol md="4">
      <MDBCard className="mb-4">
        <MDBCardHeader className="py-3">
          <MDBTypography tag="h5" className="mb-0">
            Summary
          </MDBTypography>
        </MDBCardHeader>
        <MDBCardBody>
          <MDBListGroup flush="true">
            <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Products
              <span>{`$ ${cartCtx.totalAmount.toFixed(2)}`}</span>
            </MDBListGroupItem>
            <MDBListGroupItem
              className="d-flex justify-content-between align-items-center px-2 mt-2"
              style={{ border: "1px solid var(--grey)" }}
            >
              Shipping
              <span>Gratis</span>
            </MDBListGroupItem>
            <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>Total amount</strong>
                <strong>
                  <p className="mb-0">(including VAT)</p>
                </strong>
              </div>
              <span>
                <strong>{`$ ${cartCtx.totalAmount.toFixed(2)}`}</strong>
              </span>
            </MDBListGroupItem>
          </MDBListGroup>

          <MDBBtn block size="lg">
            Go to checkout
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
