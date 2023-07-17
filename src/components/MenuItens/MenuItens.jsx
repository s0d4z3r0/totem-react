import style from "./MenuItens.module.css";
import { NavLink } from "react-router-dom";

const MenuItens = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "var(--color-primary)" : "var(--color-white)",
      borderBottom: isActive ? "3px solid #FA8023" : "none",
    };
  };

  return (
    <nav className={style.menuItens}>
      <ul className={style.itens}>
        <li className={style.item}>
          <NavLink style={navLinkStyles} to={"/totem-react/menu"}>
            Burgers
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink style={navLinkStyles} to={"/"}>
            Fries
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink style={navLinkStyles} to={"/"}>
            Drinks
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink style={navLinkStyles} to={"/"}>
            Desserts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuItens;
