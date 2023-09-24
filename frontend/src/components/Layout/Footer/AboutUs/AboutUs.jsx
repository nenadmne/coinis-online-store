import { useState, useRef} from "react";
import "./AboutUs.css";
import ReadMore from "./ReadMore/ReadMore";
import FooterDescription from "./Description/FooterDescription";

const AboutUs = () => {
  const [readMore, setReadMore] = useState(false);
  const reasonsRef = useRef(null);

  const showMoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="about-us">
      <FooterDescription showMoreHandler={showMoreHandler}/>
      <ReadMore reasonsRef={reasonsRef} readMore={readMore} />
    </div>
  );
};

export default AboutUs;
