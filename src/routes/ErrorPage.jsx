import { useNavigate } from "react-router-dom";
import style from "./ErrorPage.module.css";
import Logo from "../img/burger-logo-vector.png";
import ErrorPng from "../assets/erro-404.png";
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";

const ErrorPage = () => {
  const [seconds, setSeconds] = useState(10);

  const navigate = useNavigate();

  // Conta regressivamente 10 segundos e redireciona a página para o Home
  useEffect(() => {
     const redirect = setInterval(() => {
        setSeconds(seconds-1)

        if(seconds === 1){
            setSeconds(10)
            return navigate('/totem-react')
        }
    }, 1000)

    return () => clearInterval(redirect)
  })

  return (
    <div>
      <div className={style.errorPage}>
        <div className={style.logo}>
          <img src={Logo} alt="logo" />
        </div>

        <div className={style.imgErro}>
          <img src={ErrorPng} alt="error img" />
        </div>

        <div className={style.text}>
          <h3>Erro 404!</h3>
          <p>
            A página que você está procurando não existe. <br />
            Redirecionando para a página inicial em{" "}
            <span className={style.timer}>
              {seconds < 10 ? "0" + seconds : seconds}
            </span>
            ...
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
