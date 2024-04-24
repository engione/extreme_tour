import { About } from "../ui/About/About";
import { Advantages } from "../ui/Advantages/Advantages";
import { FeedbackForm } from "../ui/FeedbackForm/FeedbackForm";
import { Footer } from "../ui/Footer/Footer";
import { Hero } from "../ui/Hero/Hero";
import { Reviews } from "../ui/Reviews/Reviews";

export const AboutPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Advantages />
      <Reviews />
      <FeedbackForm />
    </>
  );
};
