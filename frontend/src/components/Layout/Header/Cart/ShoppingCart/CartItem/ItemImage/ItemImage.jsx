import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBCol, MDBRipple } from "mdb-react-ui-kit";
import React from "react";
import "./ItemImage.css";

export default function ItemImage({ thumbnail }) {
  return (
    <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
      <MDBRipple
        rippleTag="div"
        rippleColor="light"
        className="bg-image rounded hover-zoom hover-overlay cart-image-wrapper"
      >
        <img src={thumbnail} className="w-100 cart-image" />
        <a href="#!">
          <div
            className="mask"
            style={{
              backgroundColor: "rgba(251, 251, 251, 0.2)",
            }}
          ></div>
        </a>
      </MDBRipple>
    </MDBCol>
  );
}
