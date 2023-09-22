import { useState, useRef, useEffect } from "react";
import Input from "../UI/input";
import "./Footer.css";
import Textarea from "../UI/Textarea";

const Footer = () => {
  const [readMore, setReadMore] = useState(false);
  const reasonsRef = useRef(null)

  const showMoreHandler = () => {
    setReadMore(!readMore);
  };

  useEffect(() => {
    // Check if the section should be scrolled into view when readMore changes
    if (readMore && reasonsRef.current) {
      reasonsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [readMore]);

  return (
    <section className="footer-wrapper">
      <div className="about-us">
        <div className="footer-description">
          <h1>About Us - SilkRoad</h1>
          <p>
            Welcome to SilkRoad, where exquisite craftsmanship meets the allure
            of the exotic. At SilkRoad, we pride ourselves on curating an
            unparalleled collection of handcrafted treasures from around the
            world, allowing you to embark on a journey of elegance and
            sophistication from the comfort of your home.
          </p>

          <h2>Our Vision</h2>
          <p>
            SilkRoad was born out of a passion for celebrating the rich tapestry
            of global artistry and culture. Our vision is to connect discerning
            customers with the finest artisans and their creations, bridging the
            gap between tradition and modernity. We believe that every piece in
            our collection tells a unique story and reflects the dedication and
            expertise of the artisans who craft them.
          </p>

          <button className="btn btn-block btn-dark" onClick={showMoreHandler}>
          Read More
          </button>
        </div>

        <div ref={reasonsRef} className={readMore ? "opened" : "closed"}>
          <h2>Why Choose SilkRoad?</h2>
          <ul>
            <li>
              <strong>Quality Assurance:</strong> We source our products
              directly from skilled artisans and trusted partners, ensuring that
              every piece meets the highest standards of quality and
              authenticity.
            </li>
            <li>
              <strong>Unique Selection:</strong> Our collection is carefully
              curated to offer you a one-of-a-kind assortment of items that
              reflect the diversity of cultures and traditions worldwide.
            </li>
            <li>
              <strong>Fair Trade:</strong> We believe in supporting fair trade
              practices and sustainable craftsmanship, which is why we work
              closely with artisans to provide them with fair compensation for
              their work.
            </li>
            <li>
              <strong>Customer Satisfaction:</strong> Your satisfaction is our
              top priority. We are committed to providing exceptional customer
              service and a seamless shopping experience.
            </li>
          </ul>
        </div>

      </div>
      <div className="ticket-submit">
        <h1> Customer support </h1>
        <form className="footer-form">
          <Input
            input={{ label: "Enter your name", type: "text" }}
            className="footer-input"
          />
          <Textarea
            textarea={{ label: "Describe your problem", type: "text" }}
          />
          <Input
            input={{ label: "Enter your email", type: "text" }}
            className="footer-input"
          />
          <div className="button-div">
            <button className="btn btn-block btn-danger"> Cancel </button>
            <button className="btn btn-block btn-success"> Submit </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Footer;
