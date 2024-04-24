import { HistoryCard } from "../HistoryCard/HistoryCard";
import history from "./HistorySection.module.scss";

export const HistorySection = () => {
  return (
    <section className={history.history}>
      <div className="container">
        <div className={history.wrapper}>
          <h2>История</h2>
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
        </div>
      </div>
    </section>
  );
};
