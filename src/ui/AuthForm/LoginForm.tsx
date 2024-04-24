import { useState } from "react";
import Close from "../../assets/close.svg?react";
import auth from "./AuthForm.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { SignIn } from "../../repo/SignIn";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

export const LoginForm = ({ setToken, setAuthBtn }: any) => {
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function handleChange(event: any) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const data = await SignIn(formData.email, formData.password);
    if (data.error === null) {
      console.log(data.data);
      setToken(data.data);
      dispatch({
        type: "ADD_USER_METADATA",
        payload: data.data.user?.user_metadata,
      });
      setAuthBtn(false);
      (() => {
        toast.success("Вы вошли в аккаунт");
      })();
      navigate(fromPage, {replace: true});
    } else {
      (() => {
        toast.error(data.error.toString());
      })();
      setLoading(false);
    }

    // try {
    //   const { data, error } = await supabase.auth.signInWithPassword({
    //     email: formData.email,
    //     password: formData.password,
    //   });
    //   if (error) throw error;
    //   setToken(data);
    //   setAuthBtn(false);
    //   navigate("/");
    // } catch (error) {
    //   alert(error);
    // }
  }

  return (
    <>
      <div className={auth.main}>
        <div className={auth.authWrapper}>
          <h3>Вход</h3>
          <button
            onClick={() => navigate("/", { replace: false })}
            className={auth.close}
          >
            <Close />
          </button>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Почта"
              onChange={handleChange}
            />
            <input
              type="text"
              name="password"
              placeholder="Пароль"
              onChange={handleChange}
            />
            <div className={auth.btnWrapper}>
              <button
                disabled={loading}
                className={`${auth.btn} ${auth.btnAuth}`}
                type="submit"
              >
                {loading ? (
                  <CircularProgress
                    style={{ color: "white" }}
                    color="secondary"
                    size={25}
                  />
                ) : (
                  "Войти"
                )}
              </button>
              <span>Или</span>
              <button className={`${auth.btn} ${auth.btnGoogle}`}>
                Войти с Google
              </button>
              <p>
                Нет аккаунта? <Link to={"/signup"}>Зарегистрироваться</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
