import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleTour } from "../repo/getSingleTour";
import { SingleTourDescr } from "../ui/SingleTourDescr/SingleTourDecr";
import Skeleton from "@mui/material/Skeleton/Skeleton";
import { SingleTourDetails } from "../ui/SingleTourDetails/SingleTourDetails";

export const SingleTourPage = () => {
  const [tour, setTour] = useState<any>();
  const { tourId } = useParams();
  window.scrollTo(0, 0);

  useEffect(() => {
    (async () => {
      const data = await getSingleTour(Number(tourId));
      setTour(data);
    })();
  }, []);

  return (
    <>
      {tour instanceof Array ? (
        <>
          <SingleTourDescr
            img={tour[0].img}
            name={tour[0].name}
            price={tour[0].price}
            descr={tour[0].descr}
          />
          <SingleTourDetails />
        </>
      ) : (
        <div className="container">
          <div
            style={{
              paddingTop: "190px",
              width: "1100px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Skeleton
              sx={{ bgcolor: "grey.300", borderRadius: "20px" }}
              variant="rectangular"
              width={582}
              height={550}
              animation={"wave"}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {Array.from({ length: 10 }, (item, index) => {
                return (
                  <Skeleton
                    key={index}
                    sx={{ bgcolor: "grey.300", borderRadius: "20px" }}
                    variant="rectangular"
                    width={500}
                    height={25}
                    animation={"wave"}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
