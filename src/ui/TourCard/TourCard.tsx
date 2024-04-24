// import img from "../../assets/tour_img.png";
import { Link } from "react-router-dom";
import Calendar from "../../assets/calendar.svg?react";
import People from "../../assets/group_people.svg?react";
import card from "./TourCard.module.scss";
import { truncate } from "../../utils/truncate";

type TCard = {
    id: number;
    img: string;
    name: string;
    descr: string;
    price: string;
}

export const TourCard = ({id, img, name, descr, price} : TCard) => {
  return (
    <Link to={`/tours/${id}`}>
        <div className={card.card}>
          <img src={img} />
          <div className={card.cardInfo}>
              <h4>{name}</h4>
              <p className={card.price}>
                от
                <span>{price}&nbsp;₽</span>
              </p>
              <div className={card.params}>
                <span>
                  <Calendar/>
                  Понедельник
                </span>
                <span>
                  <People/>
                  10-30
                </span>
              </div>
              <p>{truncate(descr)}</p>
          </div>
        </div>
    </Link>
  );
};
