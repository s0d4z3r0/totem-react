import style from "./Home.module.css";
import Logo from "../img/burger-logo-vector.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className={style.home}>

        <div className={style.logo}>
          <img src={Logo} alt="logo" />
        </div>

        <div className={style.text}>
          <h3>Faça seu pedido agora mesmo!</h3>
          <p>
            A melhor hamburgueria, com os melhores ingredientes, possui os
            melhores clientes.
          </p>
        </div>

        <div className={style.btn}>
          <Link to="/totem-react/menu">FAZER PEDIDO</Link>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;
