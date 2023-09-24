import Input from "../../../../UI/input";
import Textarea from "../../../../UI/Textarea";
import Button from "../../../../UI/Button";
import "./TicketSubmit.css";

const TicketSubmit = () => {
  return (
    <div className="ticket-submit">
      <h1> Customer support </h1>
      <form className="footer-form">
        <Input
          input={{ label: "Enter your name", type: "text" }}
          className="footer-input"
        />
        <Textarea textarea={{ label: "Describe your problem", type: "text" }} />
        <Input
          input={{ label: "Enter your email", type: "text" }}
          className="footer-input"
        />
        <div className="button-div">
          <Button className="btn btn-block btn-danger" name="cancel" />
          <Button
            className="btn btn-block btn-success"
            name="submit"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default TicketSubmit;
