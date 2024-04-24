import reviews from "./Reviews.module.scss";
import user1 from "../../assets/user1.png"
import user2 from "../../assets/user2.png"
import user3 from "../../assets/user3.png"



export const Reviews = () => {
  return (
    <section className={reviews.reviews}>
      <div className="container">
        <div className={reviews.reviewsInfo}>
          <h3>Мнение наших клиентов</h3>
          <p>
            Мы помогли более чем 3000 таким людям, как вы, испытать незабываемый
            отдых.
          </p>
        </div>
        <ul className={reviews.reviewsList}>
          <li>
            <div className={reviews.card}>
              <img src={user1} />
              <span>Иван Иванов</span>
              <p>А ещё предприниматели в сети интернет в равной степени предоставлены сами себе. Прежде всего, дальнейшее развитие различных форм деятельности, в своём классическом представлении, допускает внедрение новых предложений.</p>
            </div>
          </li>
          <li>
            <div className={reviews.card}>
              <img src={user2} />
              <span>Анна Иванова</span>
              <p>А ещё предприниматели в сети интернет в равной степени предоставлены сами себе. Прежде всего, дальнейшее развитие различных форм деятельности, в своём классическом представлении, допускает внедрение новых предложений.</p>
            </div>
          </li>
          <li>
            <div className={reviews.card}>
              <img src={user3} />
              <span>Иван Иванов</span>
              <p>А ещё предприниматели в сети интернет в равной степени предоставлены сами себе. Прежде всего, дальнейшее развитие различных форм деятельности, в своём классическом представлении, допускает внедрение новых предложений.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
