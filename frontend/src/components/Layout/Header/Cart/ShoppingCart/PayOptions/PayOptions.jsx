import "./PayOptions.css";

export default function PayOptions() {
  return (
    <section className="pay-options-wrapper">
      <p>
        <strong>We accept</strong>
      </p>
      <div className="pay-options">
        <img
          src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
          alt="Visa"
        />
        <img
          src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
          alt="American Express"
        />
        <img
          src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
          alt="Mastercard"
        />
        <img
          src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
          alt="PayPal acceptance mark"
        />
      </div>
    </section>
  );
}


