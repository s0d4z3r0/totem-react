import { useState } from "react";
import style from "./MenuItens.module.css";

const MenuItens = ({ handleSetLinkItem }) => {
  const [clicked, setClicked] = useState("");

  const handleNavLinkClick = (item) => {
    handleSetLinkItem(item);
    setClicked(item);
  };

  const itemActive = {
    color: "var(--color-primary)",
    borderBottom: "2px solid var(--color-primary)",
  };

  return (
    <nav className={style.menuItens}>
      <ul className={style.itens}>
        <li className={style.item}>
          <button
            onClick={() => handleNavLinkClick("burger")}
            style={clicked === "burger" ? itemActive : {}}
          >
            Burgers
          </button>
        </li>
        <li className={style.item}>
          <button
            onClick={() => handleNavLinkClick("fries")}
            style={clicked === "fries" ? itemActive : {}}
          >
            Fries
          </button>
        </li>
        <li className={style.item}>
          <button
            onClick={() => handleNavLinkClick("drinks")}
            style={clicked === "drinks" ? itemActive : {}}
          >
            Drinks
          </button>
        </li>
        <li className={style.item}>
          <button
            onClick={() => handleNavLinkClick("desserts")}
            style={clicked === "desserts" ? itemActive : {}}
          >
            Desserts
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MenuItens;
