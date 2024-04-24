import { Link, useNavigate } from "react-router-dom";
import Close from "../../assets/close.svg?react";
import auth from "./AuthForm.module.scss";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { SignUp } from "../../repo/SignUp";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

export const RegisterForm = ({ setToken, setAuthBtn }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  function handleChange(event: any) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  console.log(formData);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const data = await SignUp(
      formData.email,
      formData.password,
      formData.fullName
    );
    if (data.error === null) {
      console.log(data.data);
      alert("Вы успешно зарегистрировались!");
      setToken(data.data);
      dispatch({
        type: "ADD_USER_METADATA",
        payload: data.data.user?.user_metadata,
      });
      setAuthBtn(false);
      (() => {
        toast.success("Аккаунт создан");
      })();
      navigate("/");
    } else {
      (() => {
        toast.error(data.error.toString());
      })();
      setLoading(false);
    }

    // try {
    //   const { data, error } = await supabase.auth.signUp({
    //     email: formData.email,
    //     password: formData.password,
    //   });
    //   if (error) throw error;
    //   alert("Вы успешно зарегистрировались!");
    //   setToken(data)
    //   setAuthBtn(false)
    //   navigate("/");
    // } catch (error) {
    //   alert(error);
    // }
  }

  return (
    <div className={auth.main}>
      <div className={auth.authWrapper}>
        <h3>Регистрация</h3>
        <button
          onClick={() => navigate("/", { replace: false })}
          className={auth.close}
        >
          <Close />
        </button>
        <form onSubmit={handleSubmit}>
          <input
            name="fullName"
            type="text"
            placeholder="Имя и фамилия"
            onChange={handleChange}
          />
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
                "Зарегистрироваться"
              )}
            </button>
            <span>Или</span>
            <button className={`${auth.btn} ${auth.btnGoogle}`}>
              Зарегистрироваться с Google
            </button>
            <p>
              Уже есть аккаунт? <Link to={"/login"}>Войти</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
