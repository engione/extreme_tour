import { useLocation } from "react-router-dom";
import { ServiceCard } from "../ServiceCard/ServiceCard";
import { TourCard } from "../TourCard/TourCard";
import sr from "./SearchResult.module.scss";

export const SearchResult = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  return (
    <section className={sr.searchResult}>
      <div className="container">
        <h2>Результаты поиска:</h2>
        <div></div>
      </div>
    </section>
  );
};
