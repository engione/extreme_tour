import { NavLink, Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Nav } from "../Nav/Nav";
import { Footer } from "../Footer/Footer";

type TLayout = {
  authBtn: boolean;
};

export const Layout = ({ authBtn }: TLayout) => {
  return (
    <>
      <Header auth={authBtn}>
        <Nav>
          <NavLink to={"/"}>Главная</NavLink>
          <NavLink to={"/tours"}>Туры</NavLink>
          <NavLink to={"/about"}>О нас</NavLink>
          <NavLink to={"/dest"}>Направления</NavLink>
        </Nav>
      </Header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
