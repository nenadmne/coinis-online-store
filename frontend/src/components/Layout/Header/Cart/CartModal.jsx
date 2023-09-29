import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function CartModal({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ShoppingCart />
        </Box>
      </Modal>
    </div>
  );
}
