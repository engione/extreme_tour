import ArrowForward from "../../assets/arrow_forward.svg?react";
import ArrowBack from "../../assets/arrow_back.svg?react";
import btn from "./BtnSlider.module.scss";
import { useState } from "react";

type TBtnSlider = {
  nextPage: () => void;
  prevPage: () => void;
  scrollLeft: boolean;
  scrollRight: boolean;
};
export const BtnSlider = ({
  nextPage,
  prevPage,
  scrollLeft,
  scrollRight,
}: TBtnSlider) => {

  return (
    <div className={btn.btnWrapper}>
      <button onClick={prevPage} disabled={!scrollLeft} className={btn.btn}>
        <ArrowBack />
      </button>
      <button onClick={nextPage} disabled={!scrollRight} className={btn.btn}>
        <ArrowForward />
      </button>
    </div>
  );
};
