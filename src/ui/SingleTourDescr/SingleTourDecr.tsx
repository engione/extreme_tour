import { Btn } from "../Btn/Btn";
import { priceFormat } from "../../utils/priceFormat";
import singleTour from "./SingleTourDescr.module.scss";
import { Navigate, useNavigate } from "react-router-dom";
import ArrowBack from "../../assets/arrow_back.svg?react";
import { minPickDate } from "../../utils/minPickDate";
import { useSelector } from "react-redux";
import { sendRequestTour } from "../../repo/sendRequestTour";
import toast from "react-hot-toast";
import { FormEvent, useState } from "react";
import { Dialog } from "../Dialog/Dialog";

type TSingleTourDescr = {
  id: number;
  img: string;
  name: string;
  price: number;
  descr: string;
};

export const SingleTourDescr = ({
  id,
  img,
  name,
  price,
  descr,
}: TSingleTourDescr) => {
  const navigate = useNavigate();
  const minDate = minPickDate();
  const user = useSelector((state: any) => state.userData.data);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const date = e.target.date.value;

    setOpen(true);

    if (Object.keys(user).length === 0) {
      return navigate("/login");
    }

    // const idHistory = Math.floor(Math.random() * 1000);

    // const { data, error } = await sendRequestTour(idHistory, user.id, id, date);

    // if (!error) {
    //   (() => {
    //     toast.success("Заявка отправлена");
    //   })();
    // } else {
    //   (() => {
    //     toast.error("Произошла ошибка");
    //   })();
    // }
  };
  return (
    <section className={singleTour.singleTourDescr}>
      <div className={`container ${singleTour.customContainer}`}>
        <button className={singleTour.btnBack} onClick={() => navigate(-1)}>
          <ArrowBack />
          Назад
        </button>
        <div className={singleTour.wrapper}>
          <img className={singleTour.img} src={img} alt="Изображение тура" />
          <div className={singleTour.info}>
            <h3>{name}</h3>
            <p className={singleTour.price}>
              от&nbsp;
              <span>{priceFormat(price).toString()}&nbsp;₽</span>
            </p>
            <p className={singleTour.descr}>{descr}</p>
            <form onSubmit={(e) => handleSubmit(e)} className={singleTour.form}>
              <label className={singleTour.label}>
                <span>Выбрать дату</span>
                <input name="date" type="date" min={minDate} />
              </label>
              <Btn type="submit">Оставить заявку</Btn>
            </form>
            <Dialog open={open} handleClose={handleClose}>
              <h4 className={singleTour.dialogTitle}>
                Вы точно желаете оставить заявку?
              </h4>
              <div className={singleTour.dialogWrap}>
                <button onClick={handleClose} className={`${singleTour.dialogBtn} ${singleTour.btnDanger}`}>Нет</button>
                <button className={`${singleTour.dialogBtn} ${singleTour.btnSuccess }`}>Да</button>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};
