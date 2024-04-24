import { useEffect, useState } from "react";
import { TourCard } from "../TourCard/TourCard";
import { Skeleton } from "@mui/material";
import { priceFormat } from "../../utils/priceFormat";
import { getTours } from "../../repo/getTours";
import dest from "./Destination.module.scss";
import { BtnSlider } from "../BtnSlider/BtnSlider";

export const Destination = () => {
  const [tours, setTours] = useState<any>();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await getTours();
      setTours(data);
    })();
  }, []);

  const nextPage = () => {
    setCurrentPage((prevIndex) => (prevIndex + 1) % tours.length);
  };

  const prevPage = () => {
    setCurrentPage(
      (prevIndex) => (prevIndex - 1 + tours.length) % tours.length
    );
  };

  return (
    <section className={dest.destination}>
      <div className="container">
        <div className={dest.destinationTop}>
          <h3 className={dest.title}>Популярные направления</h3>
          <BtnSlider nextPage={nextPage} prevPage={prevPage} />
        </div>
        <div className={dest.cardList}>
          {tours instanceof Array
            ? tours
                .slice(currentPage)
                .concat(tours.slice(0, currentPage))
                .slice(0, 4)
                .map((card: any) => (
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
