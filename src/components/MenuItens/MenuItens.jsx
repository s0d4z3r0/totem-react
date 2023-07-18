import style from "./MenuItens.module.css";
import { NavLink } from "react-router-dom";

const MenuItens = ({handleSetLinkItem}) => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "var(--color-primary)" : "var(--color-white)",
      borderBottom: isActive ? "3px solid #FA8023" : "none",
    };
  };

  const handleNavLinkClick = (item) => {
    handleSetLinkItem(item)
  }
  
   return (
    <nav className={style.menuItens}>
      <ul className={style.itens}>
        <li className={style.item}>
          <NavLink style={navLinkStyles} onClick={() => handleNavLinkClick('burger')}>
            Burgers
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink style={navLinkStyles} onClick={() => handleNavLinkClick('fries')}>
            Fries
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink style={navLinkStyles} onClick={() => handleNavLinkClick('drinks')}>
            Drinks
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink style={navLinkStyles} onClick={() => handleNavLinkClick('desserts')}>
            Desserts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuItens;
