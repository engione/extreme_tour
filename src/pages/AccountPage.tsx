import { useNavigate } from "react-router-dom";
import { UserProfile } from "../ui/UserAvatar/UserProfile";
import { useDispatch, useSelector } from "react-redux";
import { AccountInfo } from "../ui/AccountInfo/AccountInfo";
import { Btn } from "../ui/Btn/Btn";
import { HistorySection } from "../ui/HistorySection/HistorySection";
import { useState, useEffect } from "react";
import { getHistory } from "../repo/getHistory";

export const AccountPage = ({ setToken, setAuthBtn }: any) => {
  const [historyCards, setHistoryCards] = useState<any>();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const user_metadata = useSelector((state: any) => state.userData.data.user_metadata);
  const userId = useSelector((state: any) => state.userData.data.id);


  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/");
    setToken(false);
    dispatch({ type: "REMOVE_USER_DATA" });
    setAuthBtn(true);
  }

  useEffect(() => {
    (async () => {
      const data = await getHistory(userId);
      setHistoryCards(data);
    })();
    console.log(historyCards);
  }, []);

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
      <HistorySection historyCards={historyCards} />
    </>
  );
};
