import scard from "./ServiceCard.module.scss"

type TServiseCard = {
  name: string;
  descr: string;
  img: string;
}

export const ServiceCard = ({name, descr, img} : TServiseCard) => {

  return (
    <div className={scard.card}>
      <img src={img} alt="Карточка сервиса" />
      <div className={scard.cardInfo}>
        <h3>{name}</h3>
        <p>{descr}</p>
      </div>
    </div>
  )
}