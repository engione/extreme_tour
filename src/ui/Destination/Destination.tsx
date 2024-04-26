import { useEffect, useState } from "react";
import { TourCard } from "../TourCard/TourCard";
import { Skeleton } from "@mui/material";
import { priceFormat } from "../../utils/priceFormat";
import { getTours } from "../../repo/getTours";
import dest from "./Destination.module.scss";
import { BtnSlider } from "../BtnSlider/BtnSlider";
import { useScroll } from "../../hooks/useScroll";

export const Destination = () => {
  const [tours, setTours] = useState<any>();
  const { listRef, canScrollLeft, canScrollRight, scrollContainerBy } =
    useScroll(tours);

  useEffect(() => {
    (async () => {
      const data = await getTours();
      setTours(data);
    })();
  }, []);

  return (
    <section className={dest.destination}>
      <div className="container">
        <div className={dest.destinationTop}>
          <h3 className={dest.title}>Популярные направления</h3>
          <BtnSlider
            scrollLeft={canScrollLeft}
            scrollRight={canScrollRight}
            nextPage={() => scrollContainerBy(1220)}
            prevPage={() => scrollContainerBy(-1220)}
          />
        </div>
        <div className={dest.cardList}>
          <ul ref={listRef}>
            {tours instanceof Array
              ? tours.map((card: any) => (
                  <li key={card.id}>
                    <TourCard
                      id={card.id}
                      name={card.name}
                      descr={card.descr}
                      img={card.img}
                      price={priceFormat(card.price).toString()}
                    />
                  </li>
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
          </ul>
        </div>
      </div>
    </section>
  );
};
