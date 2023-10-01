import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import "../ShoppingCart.css";

export default function PayOptions() {
  return (
    <MDBCard className="mb-4 mb-lg-0">
      <MDBCardBody>
        <p>
          <strong>We accept</strong>
        </p>
        <MDBCardImage
          className="me-2"
          width="45px"
          src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
          alt="Visa"
        />
        <MDBCardImage
          className="me-2"
          width="45px"
          src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
          alt="American Express"
        />
        <MDBCardImage
          className="me-2"
          width="45px"
          src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
          alt="Mastercard"
        />
        <MDBCardImage
          className="me-2"
          width="45px"
          src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
          alt="PayPal acceptance mark"
        />
      </MDBCardBody>
    </MDBCard>
  );
}
