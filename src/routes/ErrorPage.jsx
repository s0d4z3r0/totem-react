import { useNavigate } from "react-router-dom";
import style from "./ErrorPage.module.css";
import Logo from "../img/burger-logo-vector.png";
import { useEffect, useState } from "react";

const ErrorPage = () => {
  const [seconds, setSeconds] = useState(10);

  const navigate = useNavigate();


  useEffect(() => {
     const redirect = setInterval(() => {
        setSeconds(seconds-1)
        console.log(seconds)

        if(seconds === 1){
            setSeconds(10)
            return navigate('/totem-react')
        }
    }, 1000)

    return () => clearInterval(redirect)
  })

  return (
    <div>
      <div className={style.home}>
        <div className={style.logo}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={style.text}>
          <h3>
            Erro 404! <br />
            :(
          </h3>
          <p>
            Infelizmente parece que a página que você está procurando não
            existe. <br />Redirecionando para a página
            inicial em <span className={style.timer}>{seconds}</span>...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
