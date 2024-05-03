import { ServiceCard } from "../ServiceCard/ServiceCard";
import Skeleton from "@mui/material/Skeleton/Skeleton";
import sl from "./ServiceList.module.scss";

type TServiceList = {
  service: [];
};

export const ServiceList = ({ service }: TServiceList) => {
  return (
    <section className={sl.service}>
      <div className="container">
        <h3 className={sl.title}>Сервис</h3>
        <div className={sl.cardList}>
          <ul>
            {service instanceof Array
              ? service?.map((card: any) => (
                  <li key={card.id}>
                    <ServiceCard
                      name={card.name}
                      descr={card.descr}
                      img={card.img}
                    />
                  </li>
                ))
              : Array.from({ length: 4 }, (item, index) => {
                  return (
                    <Skeleton
                      key={index}
                      sx={{ bgcolor: "grey.300", borderRadius: "20px" }}
                      variant="rectangular"
                      width={558}
                      height={445}
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
