import { useState, useEffect } from "react";
import { getTours } from "../repo/getTours";
import { Destination } from "../ui/Destination/Destination";
import { FeedbackForm } from "../ui/FeedbackForm/FeedbackForm";
import { Hero } from "../ui/Hero/Hero";
import { Reviews } from "../ui/Reviews/Reviews";
import { SelectSearch } from "../ui/SelectSearch/SelectSearch";

export const MainPage = () => {
  const [popTours, setPopTours] = useState<any>();


  useEffect(() => {
    (async () => {
      const data = await getTours();
      setPopTours(data);
    })();
  }, []);

  return (
    <>
      <Hero>
        <SelectSearch />
      </Hero>
      <Destination popTours={popTours}/>
      <Reviews />
      <FeedbackForm v="main" />
    </>
  );
};
