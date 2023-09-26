import React, { useState } from "react";
import useInput from "../../../hooks/use-input";
import Card from "../../../UI/Card";
import Input from "../../../UI/input";
import Button from "../../../UI/Button";
import "./UserPassword.css";

const UserPassword = () => {
  const [passIsSubmitted, setPassIsSubmitted] = useState(false);

  const {
    enteredValue: enteredOldPass,
    onChangeHandler: oldPassHandler,
    isValid: oldPasswordIsValid,
  } = useInput((enteredOldPass) => enteredOldPass.trim().length > 5);

  const {
    enteredValue: enteredNewPass,
    onChangeHandler: newPassHandler,
    isValid: newPasswordIsValid,
  } = useInput((enteredNewPass) => enteredNewPass.trim().length > 5);

  const {
    enteredValue: enteredRepeatedPass,
    onChangeHandler: repeatedPassHandler,
    isValid: repeatedPasswordIsValid,
  } = useInput((enteredRepeatedPass) => enteredRepeatedPass.trim().length > 5);

  const oldPassClass = !oldPasswordIsValid && passIsSubmitted ? "invalid" : "";
  const newPassClass =
    (!newPasswordIsValid && passIsSubmitted) ||
    enteredNewPass !== enteredRepeatedPass
      ? "invalid"
      : "";
  const repeatedPassClass =
    (!newPasswordIsValid && passIsSubmitted) ||
    enteredNewPass !== enteredRepeatedPass
      ? "invalid"
      : "";

  return (
    <Card className="password-input-wrapper">
      <form method="POST">
        <div className="password-info">
          <h2> Change your password </h2>
          <Input
            input={{
              type: "password",
              name: "oldPassword",
              value: enteredOldPass,
              onChange: oldPassHandler,
              className: oldPassClass,
            }}
          />
          {oldPassClass && (
            <p className="invalid-para">
              Minimum password length is 6 characters!
            </p>
          )}

          <Input
            input={{
              type: "password",
              name: "newPassword",
              value: enteredNewPass,
              onChange: newPassHandler,
              className: newPassClass,
            }}
          />
          {newPassClass && (
            <p className="invalid-para">
              Minimum password length is 6 characters! Make sure your passwords
              matches!
            </p>
          )}

          <Input
            input={{
              type: "password",
              name: "confirmedPassword",
              value: enteredRepeatedPass,
              onChange: repeatedPassHandler,
              className: repeatedPassClass,
            }}
          />
          {repeatedPassClass && (
            <p className="invalid-para">
              Minimum password length is 6 characters! Make sure your passwords
              matches!
            </p>
          )}

          <Button
            name="Save changes"
            className="btn btn-block btn-outline-dark"
          />
        </div>
      </form>
    </Card>
  );
};

export default UserPassword;
