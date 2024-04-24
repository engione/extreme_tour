import SearchLogo from "../../assets/search.svg?react";
import People from "../../assets/group_people.svg?react";
import Calendar from "../../assets/calendar.svg?react";
import Flag from "../../assets/flag.svg?react";
import Car from "../../assets/car.svg?react";
import select from "./SelectSearch.module.scss";
import { minPickDate } from "../../utils/minPickDate";

export const SelectSearch = () => {
    
  const minDate = minPickDate();
  
  return (
    <div className={select.formWrapper}>
      <form className={select.form}>
        <label>
          <span>
            <People />
            Количество
          </span>
          <input type="number" min="1" max="10" placeholder="Количество" />
        </label>
        <label>
          <span>
            <Calendar />
            Дата
          </span>
          <input type="date" min={minDate} />
        </label>
        <label>
          <span>
            <Flag />
            Тур
          </span>
          <select defaultValue="Выбрать тур">
            <option defaultValue="0">Выбрать тур</option>
            <option value="Рафтинг">Рафтинг</option>
            <option value="Дайвинг">Дайвинг</option>
            <option value="Парапланеризм">Парапланеризм</option>
            <option value="Восхождение">Восхождение</option>
            <option value="Дельтапланеризм">Дельтапланеризм</option>
            <option value="Кайтсерфинг">Кайтсерфинг</option>
            <option value="Сплав по реке">Сплав по реке</option>
          </select>
        </label>
        <label>
          <span>
            <Car />
            Транспорт
          </span>
          <select defaultValue="Транспорт">
            <option defaultValue="0">Транспорт</option>
            <option value="Личный трансфер">Личный трансфер</option>
            <option value="Автобус">Автобус</option>
          </select>
        </label>
        <button type="submit">
          <SearchLogo />
        </button>
      </form>
    </div>
  );
};
