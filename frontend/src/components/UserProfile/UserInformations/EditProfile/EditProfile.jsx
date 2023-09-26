import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Input from "../../../../UI/input";
import Button from "../../../../UI/Button";
import "./EditProfile.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function EditProfile({ open, handleClose, user }) {
  const [userInfo, setUserInfo] = useState(user[0]);
  const nameHandler = (event) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      name: event.target.value,
    }));
  };

  const countryHandler = (event) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      country: event.target.value,
    }));
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="edit-profile-form">
            <Input
              input={{
                type: "text",
                label: "Name",
                name: "name",
                value: userInfo.name,
                onChange: nameHandler,
              }}
            />
            <Input
              input={{
                type: "text",
                label: "Username",
                name: "username",
                value: userInfo.username,
                disabled: true,
              }}
            />
            <Input
              input={{
                type: "email",
                label: "Email address",
                name: "email",
                value: userInfo.email,
                disabled: true,
              }}
            />
            <Input
              input={{
                type: "text",
                label: "Country",
                name: "country",
                value: userInfo.country,
                onChange: countryHandler,
              }}
            />
            <div className="button-div">
              <Button
                className="btn btn-block btn-outline-danger"
                name="cancel"
                funtion={handleClose}
              />
              <Button
                className="btn btn-block btn-outline-success"
                name="submit"
                type="submit"
              />
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
