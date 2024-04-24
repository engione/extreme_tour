import { Btn } from "../Btn/Btn";
import { priceFormat } from "../../utils/priceFormat";
import singleTour from "./SingleTourDescr.module.scss";
import { Link, useNavigate } from "react-router-dom";
import ArrowBack from "../../assets/arrow_back.svg?react";

type TSingleTourDescr = {
  img: string;
  name: string;
  price: number;
  descr: string;
};

export const SingleTourDescr = ({
  img,
  name,
  price,
  descr,
}: TSingleTourDescr) => {
  const navigate = useNavigate();
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
            <form className={singleTour.form}>
              <label className={singleTour.label}>
                <span>Выбрать дату</span>
                <input type="date" />
              </label>
              <Btn type="submit">Оставить заявку</Btn>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
