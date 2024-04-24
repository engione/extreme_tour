import { useEffect, useState } from "react";
import { TourCard } from "../TourCard/TourCard";
import { Skeleton } from "@mui/material";
import { priceFormat } from "../../utils/priceFormat";
import { getTours } from "../../repo/getTours";
import toursSection from "./Tours.module.scss"

export const Tours = () => {
  const [tours, setTours] = useState<any>();
  useEffect(() => {
    (async () => {
      const data = await getTours();
      setTours(data);
    })();
  }, []);

  return (
    <section className={toursSection.tours}>
      <div className="container">
        <h3 className={toursSection.title}>Туры</h3>
        <div className={toursSection.cardList}>
          {tours instanceof Array
            ? tours?.map((card: any) => (
                <TourCard
                  key={card.id}
                  id={card.id}
                  name={card.name}
                  descr={card.descr}
                  img={card.img}
                  price={priceFormat(card.price).toString()}
                />
              ))
            : Array.from({ length: 4 }, (item, index) => {
                return (
                  <Skeleton
                    key={index}
                    sx={{ bgcolor: "grey.300", borderRadius: "20px" }}
                    variant="rectangular"
                    width={270}
                    height={480}
                    animation={"wave"}
                  />
                );
              })}
        </div>
      </div>
    </section>
  );
};
