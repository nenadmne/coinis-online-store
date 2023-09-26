import "./BoughtProducts.css";

const BoughtProducts = () => {
  
  return (
    <div className="bought-products">
      <div className="bought-product-info">
        <h2>{item.title}</h2>
      </div>
      <div className="bought-price">
        <div>
          <span className="price"> ${item.price} </span>
          <span> x {item.amount}</span>
        </div>
        <div className="bought-image">
          <img src={item.thumbnail} />
        </div>
      </div>
    </div>
  );
};

export default BoughtProducts;
