import { useRef } from "react";
import Pen from "../../assets/pen.svg?react"
import edit from  "./BtnEdit.module.scss"

type TBtnEdit = {
    className: string;
    onChange: (e: any) => void
}

export const BtnEdit = ({onChange, className} : TBtnEdit) => {
  const inputRef = useRef<any>();
  const handleClick = () => {    
    inputRef.current.click()
  }

  return (
    <div className={className}>
      <input onChange={onChange} className="hidden" type="file" accept="image/png, image/jpeg, image/gif" ref={inputRef}/>
      <button onClick={handleClick} className={edit.btnEdit}><Pen /></button>
    </div>
  );
}

