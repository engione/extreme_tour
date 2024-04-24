import footer from "./Footer.module.scss";
import TAdvisor from "../../assets/tadvisor.svg?react"
import Ok from "../../assets/ok.svg?react"
import Vk from "../../assets/vk.svg?react"

export const Footer = () => {
  return (
    <footer className={footer.footer}>
      <div className="container">
        <div className={footer.footerWrapper}>
          <div className={footer.footerRight}>
            <span>
              &copy;&nbsp;2012&ndash;2024 Управляющая компания Объединённой сети
              &laquo;Экстремальные туры&raquo;
            </span>
            <p>
              Представленная на сайте информация носит справочный характер
              и не является публичной офертой
            </p>
            <a className={footer.links} href="#">Пользовательское соглашение</a>
          </div>
          <div className={footer.footerCenter}>
            <span>11710, улица Юности, дом 5 строение 4, офис 2</span>
            <div className={footer.linksWrapper}>
                <a className={footer.links} href="tel:+7990060743">+7 499 006-07-43</a>
                <a className={footer.links} href="tel:+79761269801">+7 976 126-98-01</a>
            </div>
            <a className={footer.links} href="mailto:extreme.tour@mail.ru">extreme.tour@mail.ru</a>
          </div>
          <div className={footer.footerLeft}>
            <a href=""><TAdvisor /></a>
            <a href=""><Ok /></a>
            <a href=""><Vk /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
