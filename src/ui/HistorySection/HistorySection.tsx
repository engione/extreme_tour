import Skeleton from "@mui/material/Skeleton/Skeleton";
import { HistoryCard } from "../HistoryCard/HistoryCard";
import history from "./HistorySection.module.scss";

type THistory = {
  historyCards: [];
};

export const HistorySection = ({ historyCards }: THistory) => {
  return (
    <section className={history.history}>
      <div className="container">
        <div className={history.wrapper}>
          <h2>История</h2>
          <ul>
            {historyCards instanceof Array ? (
              historyCards?.map((card: any) => (
                <li key={card.id}>
                  <HistoryCard
                    img={card.tours.img}
                    title={card.tours.name}
                    date={card.date}
                    price={card.tours.price}
                  />
                </li>
              ))
            ) : (
              <Skeleton
                sx={{ bgcolor: "grey.300", borderRadius: "20px" }}
                variant="rectangular"
                width={1240}
                height={145}
                animation={"wave"}
              />
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
