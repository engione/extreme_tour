import SearchLogo from "../../assets/search.svg?react";
import People from "../../assets/group_people.svg?react";
import Calendar from "../../assets/calendar.svg?react";
import Flag from "../../assets/flag.svg?react";
import Car from "../../assets/car.svg?react";
import select from "./SelectSearch.module.scss";
import { minPickDate } from "../../utils/minPickDate";
import { ChangeEvent, FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const SelectSearch = () => {
  const [searchQuantityParam, setSearchQuantityParam] = useSearchParams();
  const [searchDateParam, setSearchDateParam] = useSearchParams();
  const [searchTourParam, setSearchTourParam] = useSearchParams();
  const [searchTransferParam, setSearchTransferParam] = useSearchParams();

  const navigate = useNavigate();

  const handleSearchQuantity = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchQuantityParam({
      quantity: value.toLowerCase(),
      date: searchDate,
      tour: searchTour,
      transfer: searchTransfer,
    });
  };

  const handleSearchDate = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchDateParam({
      quantity: searchQuantity,
      date: value.toLowerCase(),
      tour: searchTour,
      transfer: searchTransfer,
    });
  };

  const handleSearchTour = (event: ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.target;
    setSearchTourParam({
      quantity: searchQuantity,
      date: searchDate,
      tour: value,
      transfer: searchTransfer,
    });
  };

  const handleSearchTransfer = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    const { value } = event.target;
    setSearchTransferParam({
      quantity: searchQuantity,
      date: searchDate,
      tour: searchTour,
      transfer: value,
    });
  };

  const searchQuantity = searchQuantityParam.get("quantity") || "";
  const searchDate = searchDateParam.get("date") || "";
  const searchTour = searchTourParam.get("tour") || "";
  const searchTransfer = searchTransferParam.get("transfer") || "";

  let searchParams = {
    quantity: searchQuantity,
    date: searchDate,
    tour: searchTour,
    transfer: searchTransfer,
  };

  const minDate = minPickDate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("search", { replace: true, state: searchParams });
  };

  return (
    <div className={select.formWrapper}>
      <form onSubmit={(e) => handleSubmit(e)} className={select.form}>
        <label>
          <span>
            <People />
            Количество
          </span>
          <input
            onChange={handleSearchQuantity}
            type="number"
            min="1"
            max="10"
            placeholder="Количество"
          />
        </label>
        <label>
          <span>
            <Calendar />
            Дата
          </span>
          <input onChange={handleSearchDate} type="date" min={minDate} />
        </label>
        <label>
          <span>
            <Flag />
            Тур
          </span>
          <select onChange={handleSearchTour} defaultValue="Выбрать тур">
            <option disabled defaultValue="0">
              Выбрать тур
            </option>
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
          <select onChange={handleSearchTransfer} defaultValue="Транспорт">
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
