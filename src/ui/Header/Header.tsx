import logo from "../../assets/logo.svg";
import header from "./Header.module.scss";
import { Link } from "react-router-dom";
import { UserProfile } from "../UserAvatar/UserProfile";
import { useSelector } from "react-redux";

type TProps = {
  children: React.ReactNode;
  auth?: boolean;
};

export const Header = ({ children, auth = true }: TProps) => {
    const user_metadata = useSelector((state: any) => state.userData.data.user_metadata);
  return (
    <header>
      <div className={header.headerWrapper}>
        <img src={logo} alt="Логотип ЭкстримТур" />
        {children}
        {auth ? (
          <Link to={"/login"} className={header.btn}>
            Вход
          </Link>
        ) : (
          <UserProfile fullName={user_metadata.fullName} size="50" btn={true} />
        )}
      </div>
    </header>
  );
};
