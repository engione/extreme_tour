import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { RequiredAuth } from "./hoc/RequiredAuth";
import { AboutPage } from "./pages/AboutPage";
import { AccountPage } from "./pages/AccountPage";
import { MainPage } from "./pages/MainPage";
import { SingleTourPage } from "./pages/SingleTourPage";
import { ToursPage } from "./pages/ToursPage";
import { LoginForm } from "./ui/AuthForm/LoginForm";
import { RegisterForm } from "./ui/AuthForm/RegisterForm";
import { Layout } from "./ui/Layout/Layout";
import { SearchResult } from "./ui/SearchResult/SearchResult";
import ErrorPage from "./pages/ErrorsPage";

function App() {
  const user_metadata = useSelector((state: any) => state.user_metadata);
  const dispatch = useDispatch();
  const [token, setToken] = useState(false);
  const [authBtn, setAuthBtn] = useState<boolean>(true);

  console.log(user_metadata);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token")!);
      setToken(data);
      console.log(data);
      dispatch({
        type: "ADD_USER_DATA",
        payload: data.user,
      });
      setAuthBtn(false);
    }
  }, []);

  return (
    <>
      <Toaster
        toastOptions={{
          position: "top-right",
          style: {
            minWidth: "300px",
            height: "60px",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<LoginForm setToken={setToken} setAuthBtn={setAuthBtn} />}
          />
          <Route
            path="/signup"
            element={
              <RegisterForm setToken={setToken} setAuthBtn={setAuthBtn} />
            }
          />
          <Route path="/" element={<Layout authBtn={authBtn} />}>
            <Route path="*" element={<ErrorPage/>} />
            <Route index element={<MainPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="search" element={<SearchResult />}/>
            <Route path="tours" element={<ToursPage />} />
            <Route path="tours/:tourId" element={<SingleTourPage />} />
            <Route
              path="dest"
              element={<div style={{ paddingTop: "200px" }}></div>}
            />
            <Route
              path="account"
              element={
                <RequiredAuth>
                  <AccountPage setToken={setToken} setAuthBtn={setAuthBtn} />
                </RequiredAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
