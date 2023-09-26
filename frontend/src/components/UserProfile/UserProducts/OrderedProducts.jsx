import Card from "../../../UI/Card";
import BoughtProducts from "./BoughtProducts";
import Button from "../../../UI/Button";
import "./OrderedProducts.css";

const OrderedProducts = ({ username, boughtItems }) => {
  return (
    <div className="user-order-wrapper">
      <Card className="user-order">
        <h2> {username}'s pending order </h2>
        {boughtItems !== undefined && boughtItems.length > 0 ? (
          <div>
            <p className="pending-mssg">(pending)</p>
            {boughtItems.map((item, index) => (
              <BoughtProducts item={item} key={index} />
            ))}
            <Button name="Cancel order" />
          </div>
        ) : (
          <p className="notice-message">You have not ordered anything yet</p>
        )}
      </Card>
    </div>
  );
};

export default OrderedProducts;
