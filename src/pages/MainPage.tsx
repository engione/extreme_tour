import { Destination } from "../ui/Destination/Destination";
import { FeedbackForm } from "../ui/FeedbackForm/FeedbackForm";
import { Hero } from "../ui/Hero/Hero";
import { Reviews } from "../ui/Reviews/Reviews";
import { SelectSearch } from "../ui/SelectSearch/SelectSearch";

export const MainPage = () => {
  return (
    <>
      <Hero>
        <SelectSearch />
      </Hero>
      <Destination />
      <Reviews />
      <FeedbackForm v="main" />
    </>
  );
};
