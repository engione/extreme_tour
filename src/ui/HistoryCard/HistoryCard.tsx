import { priceFormat } from "../../utils/priceFormat";
import { Btn } from "../Btn/Btn";
import card from "./HistoryCard.module.scss";
import Arrow from "../../assets/arrow_forward.svg?react";

type THistoryCard = {
  img: string;
  title: string;
  date: string;
  price: number;
};

export const HistoryCard = ({ img, title, date, price }: THistoryCard) => {
  return (
    <div className={card.card}>
      <div
        style={{ maxWidth: "400px", width: "100%" }}
        className={card.cardInfo}
      >
        <img src={img} alt="Изображение тура" />
        <h3>{title}</h3>
      </div>
      <div className={card.cardInfo}>
        <span>Дата:</span>
        <span>{date}</span>
      </div>
      <div
        style={{ borderRight: "none", paddingRight: "0" }}
        className={card.cardInfo}
      >
        <span>Цена:</span>
        <span>{priceFormat(price).toString()}&nbsp;₽</span>
      </div>
      <Btn><Arrow /></Btn>
    </div>
  );
};
