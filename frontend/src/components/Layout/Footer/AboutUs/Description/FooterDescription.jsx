import "./FooterDescription.css";

const FooterDescription = ({ showMoreHandler }) => {
    
  return (
    <div className="footer-description">
      <h2>About Us - SilkRoad</h2>
      <p>
        Welcome to SilkRoad, where exquisite craftsmanship meets the allure of
        the exotic. At SilkRoad, we pride ourselves on curating an unparalleled
        collection of handcrafted treasures from around the world, allowing you
        to embark on a journey of elegance and sophistication from the comfort
        of your home.
      </p>

      <h2>Our Vision</h2>
      <p>
        SilkRoad was born out of a passion for celebrating the rich tapestry of
        global artistry and culture. Our vision is to connect discerning
        customers with the finest artisans and their creations, bridging the gap
        between tradition and modernity. We believe that every piece in our
        collection tells a unique story and reflects the dedication and
        expertise of the artisans who craft them.
      </p>

      <button className="btn btn-block btn-dark" onClick={showMoreHandler}>
        Read More
      </button>
    </div>
  );
};

export default FooterDescription;
