import { useState, useEffect } from "react";
import { getTours } from "../repo/getTours";
import { ServiceList } from "../ui/ServiceList/ServiceList";
import { Tours } from "../ui/Tours/Tours";
import { getService } from "../repo/getService";

export const ToursPage = () => {
  const [tours, setTours] = useState<any>();
  useEffect(() => {
    (async () => {
      const data = await getTours();
      setTours(data);
    })();
  }, []);

  const [service, setService] = useState<any>();
  useEffect(() => {
    (async () => {
      const data = await getService();
      setService(data);
    })();
  }, []);

  window.scrollTo(0, 0);
  return (
    <>
      <Tours tours={tours} />
      <ServiceList service={service}/>
    </>
  );
};
