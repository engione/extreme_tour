import Modal from "@mui/material/Modal";
import { forwardRef, useState } from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

type TAuth = {
  open: boolean;
  handleClose: () => void;
};

export const AuthForm = ({ open, handleClose }: TAuth) => {
  const [authType, setAuthType] = useState<"auth" | "register">("auth");

  const switchAuthForm = (authT: "auth" | "register") => {
    setAuthType(authT);
  };


  return (
    <Modal open={open} onClose={handleClose}>
      {authType === "auth" ? (
        <LoginForm/>
      ) : (
        <RegisterForm/>
      )}
    </Modal>
  );
};
