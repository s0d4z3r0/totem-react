import style from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={style.footer}>
      <p>
        Criado e Desenvolvido por:
        <Link to={"https://github.com/s0d4z3r0"} target="_blank">
          <span> &copy;</span>
          André Falcão
        </Link>
      </p>
    </div>
  );
};

export default Footer;
