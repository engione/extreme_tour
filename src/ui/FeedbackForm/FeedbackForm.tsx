import { Btn } from "../Btn/Btn";
import feedback from "./FeedbackForm.module.scss";

type TFeedbackForm = {
  v?: "main" | "about";
};

export const FeedbackForm = ({ v = "about" }: TFeedbackForm) => {
  return (
    <section className={feedback.feedback}>
      <div className="container">
        <div
          className={
            v === "main"
              ? `${feedback.wrapper} ${feedback.wrapperMain}`
              : `${feedback.wrapper} ${feedback.wrapperAbout}`
          }
        >
          <form className={v === "main" ? feedback.formMain : ""}>
            {v === "main" && (
              <h3>
                Оставьте заявку прямо сейчас и наши менеджеры свяжутся с вами
              </h3>
            )}

            <input type="text" placeholder="Введите имя и фамилию" />
            {v === "main" && (
              <input type="tel" placeholder="Введите номер телефона" />
            )}
            <input type="email" placeholder="Введите почту" />
            {v === "about" && <textarea placeholder="Введите ваше сообщение" />}

            <Btn type="submit">Оставить заявку</Btn>
          </form>
        </div>
      </div>
    </section>
  );
};
