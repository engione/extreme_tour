import PeopleGroup from "../../assets/group_details.svg?react"
import Duration from "../../assets/duration.svg?react"
import Start from "../../assets/start.svg?react"
import Guide from "../../assets/guide.svg?react"
import Bus from "../../assets/bus.svg?react"
import details from "./SingleTourDetails.module.scss"

export const SingleTourDetails = () => {
  return (
    <section className={details.details}>
      <div className="container">
        <div className={details.wrapper}>
            <h2>Детали</h2>
            <p>
              Разнообразный и богатый опыт говорит нам, что высококачественный
              прототип будущего проекта позволяет оценить значение как
              самодостаточных, так и внешне зависимых концептуальных решений.
              Противоположная точка зрения подразумевает, что тщательные
              исследования конкурентов, которые представляют собой яркий пример
              континентально-европейского типа политической культуры, будут
              ограничены исключительно образом мышления. Однозначно, сторонники
              тоталитаризма в науке, вне зависимости от их уровня, должны быть
              превращены в посмешище, хотя само их существование приносит
              несомненную пользу обществу.
            </p>
            <div className={details.moreDetails}>
              <div className={details.singleDetail}>
                <PeopleGroup />
                <span className={details.detailName}>Группа</span>
                <span className={details.detailValue}>15-30</span>
              </div>
              <div className={details.singleDetail}>
                <Duration />
                <span className={details.detailName}>Продолжительность</span>
                <span className={details.detailValue}>15-30</span>
              </div>
              <div className={details.singleDetail}>
                <Start />
                <span className={details.detailName}>Старт</span>
                <span className={details.detailValue}>15-30</span>
              </div>
              <div className={details.singleDetail}>
                <Guide />
                <span className={details.detailName}>Услуги гида</span>
                <span className={details.detailValue}>15-30</span>
              </div>
              <div className={details.singleDetail}>
                <Bus />
                <span className={details.detailName}>Доступный транспорт</span>
                <span className={details.detailValue}>15-30</span>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
