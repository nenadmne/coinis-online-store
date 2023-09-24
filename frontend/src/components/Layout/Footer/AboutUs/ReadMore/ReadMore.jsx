import { useEffect } from "react";
import "./ReadMore.css";

const ReadMore = ({ reasonsRef, readMore }) => {

  useEffect(() => {
    if (readMore && reasonsRef.current) {
      reasonsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [readMore]);

  return (
    <div ref={reasonsRef} className={readMore ? "opened" : "closed"}>
      <h2>Why Choose SilkRoad?</h2>
      <ul>
        <li>
          <strong>Quality Assurance:</strong> We source our products directly
          from skilled artisans and trusted partners, ensuring that every piece
          meets the highest standards of quality and authenticity.
        </li>
        <li>
          <strong>Unique Selection:</strong> Our collection is carefully curated
          to offer you a one-of-a-kind assortment of items that reflect the
          diversity of cultures and traditions worldwide.
        </li>
        <li>
          <strong>Fair Trade:</strong> We believe in supporting fair trade
          practices and sustainable craftsmanship, which is why we work closely
          with artisans to provide them with fair compensation for their work.
        </li>
        <li>
          <strong>Customer Satisfaction:</strong> Your satisfaction is our top
          priority. We are committed to providing exceptional customer service
          and a seamless shopping experience.
        </li>
      </ul>
    </div>
  );
};

export default ReadMore;
