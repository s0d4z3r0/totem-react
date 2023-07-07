import { BrowserRouter, Router, Routes, Link } from "react-router-dom";
import Logo from './img/burger-logo-vector.png'
import Burger from './img/burger.png'
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="home">
        <div className="logo">
          <img src={Logo} alt="logo"/>
        </div>
        <div className="burger">
          <img src={Burger} alt="burger" />
        </div>
        <div className="text">
          <h3>Faça seu pedido agora mesmo!</h3>
          <p>
            A melhor hamburgueria, com os melhores ingredientes, possui os
            melhores clientes.
          </p>
        </div>
        <div className="btn">
          <Link>FAZER PEDIDO</Link>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
