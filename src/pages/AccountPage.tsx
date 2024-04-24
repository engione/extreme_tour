import { useNavigate } from "react-router-dom";
import { UserProfile } from "../ui/UserAvatar/UserProfile";
import { useDispatch, useSelector } from "react-redux";
import { AccountInfo } from "../ui/AccountInfo/AccountInfo";
import { Btn } from "../ui/Btn/Btn";
import { HistorySection } from "../ui/HistorySection/HistorySection";

export const AccountPage = ({ setToken, setAuthBtn }: any) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const user_metadata = useSelector((state: any) => state.user_metadata);

  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/");
    setToken(false);
    dispatch({ type: "REMOVE_USER_METADATA" });
    setAuthBtn(true);
  }

  return (
    <>
      <div
        className="container"
        style={{
          paddingTop: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <UserProfile fullName={user_metadata.fullName} />
        <Btn onClick={handleLogout}>Выйти</Btn>
      </div>
      <AccountInfo />
      <HistorySection />
    </>
  );
};
