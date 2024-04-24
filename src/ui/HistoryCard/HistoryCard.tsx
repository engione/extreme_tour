import { Btn } from "../Btn/Btn"
import card from "./HistoryCard.module.scss"

export const HistoryCard = () => {
    return (
        <div className={card.card}>
            <div className={card.cardInfo}>
                <img src="../../src/assets/tour_img.png" alt="Изображение тура" />
                <h3>Дайвинг в сочи</h3>
            </div>
            <div className={card.cardDate}>
                <span>Дата:</span>
                <span>11-12-23</span>
            </div>
            <Btn>Посмотреть</Btn>
        </div>
    )
}