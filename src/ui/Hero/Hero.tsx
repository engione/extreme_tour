import hero from "./Hero.module.scss";

type THero = {
  children?: React.ReactNode;
};

export const Hero = ({ children }: THero) => {
  return (
    <section className={hero.hero}>
      <div
        style={
          children ? { justifyContent: "flex-end", paddingBottom: "100px" } : {}
        }
        className={hero.heroWrapper}
      >
        <h1>Экстремальные туры по России</h1>
        {children}
      </div>
    </section>
  );
};
