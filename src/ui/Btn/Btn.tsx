import { ReactNode } from "react";
import btn from "./Btn.module.scss";

type TBtn = {
  children?: ReactNode;
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
};

export const Btn = ({ children, type, onClick }: TBtn) => {
  return (
    <button type={type} className={btn.btn} onClick={onClick}>
      {children}
    </button>
  );
};
