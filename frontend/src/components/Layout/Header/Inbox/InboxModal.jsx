import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import MessageList from "./MessageList/MessageList";
import "./InboxModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  maxHeight: "400px",
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: "1rem",
};

export default function InboxModal({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="inbox">
          <MessageList />
        </Box>
      </Modal>
    </div>
  );
}
