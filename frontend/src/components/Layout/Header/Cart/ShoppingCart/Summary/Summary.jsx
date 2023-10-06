import { useContext } from "react";
import { toast } from "react-toastify";
import ProductContext from "../../../../../../store/product-context";
import Button from "../../../../../../UI/Button";
import "./Summary.css";

export default function Summary({ handleClose }) {
  const prodCtx = useContext(ProductContext);
  const { totalAmount, cartItems, removeItem } = prodCtx;

  const isMobile = window.innerWidth < 768;

  const submitHandler = () => {
    cartItems.forEach((item) => {
      removeItem(item.id);
    });
    handleClose()
    toast.success("Order confirmed successfully!");
  };

  return (
    <div className="summary-wrapper">
      <h2>Summary</h2>
      <div className="products-and-shipping">
        <p className="summary-products">
          <span>Products</span>
          <span>{`$${totalAmount.toFixed(2)}`}</span>
        </p>
        <p className="shipping">
          Shipping
          <span>Gratis</span>
        </p>
      </div>
      <div className="summary-amount-wrapper">
        <div>
          <strong>Total amount</strong>
          <strong>
            <p className="mb-0">(including VAT)</p>
          </strong>
        </div>
        <div>
          <strong>{`$ ${totalAmount.toFixed(2)}`}</strong>
        </div>
      </div>
      {cartItems.length > 0 && (
        <Button
          className="confirm-btn"
          function={submitHandler}
          name="Confirm order"
        />
      )}
      {isMobile && (
        <Button
          function={handleClose}
          className="confirm-btn cancel"
          name="Cancel order"
        />
      )}
    </div>
  );
}
