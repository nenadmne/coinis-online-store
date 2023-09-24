import AboutUs from "./AboutUs/AboutUs";
import TicketSubmit from "./TicketSubmit/TicketSubmit";
import "./Footer.css";

const Footer = ({ footerRef }) => {
  return (
    <section ref={footerRef} className="footer-wrapper">
      <AboutUs />
      <TicketSubmit />
    </section>
  );
};

export default Footer;
