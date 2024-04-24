import advantages from "./Advantages.module.scss";
import shield from "../../assets/advantages/shield.svg";
import leaves from "../../assets/advantages/leaves.svg";
import surf from "../../assets/advantages/surf.svg";
import group from "../../assets/advantages/group.svg";
import logistic from "../../assets/advantages/logistic.svg";
import tree from "../../assets/advantages/tree.svg";
import coupon from "../../assets/advantages/coupon.svg";
import climber from "../../assets/advantages/climber.svg";

export const Advantages = () => {
  return (
    <section className={advantages.advantages}>
      <div className="container">
        <h2 className={advantages.title}>Премущества</h2>
        <ul className={advantages.advantagesList}>
          <li>
            <div style={{ backgroundImage: `url(${shield})` }}>
              <p>
                Мы предоставляем профессиональных инструкторов и снаряжение
                высокого качества
              </p>
            </div>
          </li>
          <li>
            <div style={{ backgroundImage: `url(${climber})` }}>
              <p>
                Предлагаем широкий выбор активностей, чтобы удовлетворить
                различные предпочтения клиентов.
              </p>
            </div>
          </li>
          <li>
            <div style={{ backgroundImage: `url(${tree})` }}>
              <p>
                Предлагаем возможность погрузиться в природу и насладиться ее
                красотой. Сможете отдохнуть от городской суеты.
              </p>
            </div>
          </li>
          <li>
            <div style={{ backgroundImage: `url(${logistic})` }}>
              <p>
                Мы берем на себя все организационные вопросы, включая
                бронирование и логистику. Вам не нужно беспокоиться о деталях.
              </p>
            </div>
          </li>
          <li>
            <div style={{ backgroundImage: `url(${group})` }}>
              <p>
                Мы предлагаем как групповые туры для общения и новых знакомств,
                так и индивидуальные путешествия
              </p>
            </div>
          </li>
          <li>
            <div style={{ backgroundImage: `url(${surf})` }}>
              <p>
                Также предлагаем обучение новым навыкам, что позволяет вам
                развивать себя и познавать новые грани своих возможностей.
              </p>
            </div>
          </li>
          <li>
            <div style={{ backgroundImage: `url(${leaves})` }}>
              <p>
                Следим за минимизацией негативного воздействия на окружающую
                среду
              </p>
            </div>
          </li>
          <li>
            <div style={{ backgroundImage: `url(${coupon})` }}>
              <p>
                Предлагаем эксклюзивные предложения и скидки на участие в
                экстремальных турах, делая приключения еще более доступными
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
