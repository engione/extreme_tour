import Modal from "@mui/material/Modal";
import dialog from "./Dialog.module.scss";
import { useState } from "react";

export const Dialog = ({open, children, handleClose} : any) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={dialog.wrapper}>
        {children}
      </div>
    </Modal>
  );
};
