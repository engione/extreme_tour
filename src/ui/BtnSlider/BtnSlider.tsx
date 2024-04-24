import ArrowForward from "../../assets/arrow_forward.svg?react"
import ArrowBack from "../../assets/arrow_back.svg?react"
import btn from "./BtnSlider.module.scss"

type TBtnSlider = {
    nextPage: () => void;
    prevPage: () => void;
}
export const BtnSlider = ({nextPage, prevPage} : TBtnSlider) => {
    return (
        <div className={btn.btnWrapper}>
            <button onClick={prevPage} className={btn.btn}><ArrowBack /></button>
            <button onClick={nextPage} className={btn.btn}><ArrowForward /></button>
        </div>
    )
}