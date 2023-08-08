import { useState } from "react";
import style from "./MenuItens.module.css";

const MenuItens = ({ handleSetLinkItem }) => {
  const [activeSection, setActiveSection] = useState("burger");

  const handleNavLinkClick = (item) => {
    handleSetLinkItem(item);
  };

  return (
    <nav className={style.menuItens}>
      <ul className={style.itens}>
        <li className={style.item}>
          <button
            className={activeSection === "burger" ? style.active : ""}
            onClick={() => {
              handleNavLinkClick("burger");
              setActiveSection("burger");
            }}
          >
            Burgers
          </button>
        </li>
        <li className={style.item}>
          <button
            className={activeSection === "fries" ? style.active : ""}
            onClick={() => {
              handleNavLinkClick("fries");
              setActiveSection("fries");
            }}
          >
            Fries
          </button>
        </li>
        <li className={style.item}>
          <button
            className={activeSection === "drinks" ? style.active : ""}
            onClick={() => {
              handleNavLinkClick("drinks");
              setActiveSection("drinks");
            }}
          >
            Drinks
          </button>
        </li>
        <li className={style.item}>
          <button
            className={activeSection === "desserts" ? style.active : ""}
            onClick={() => {
              handleNavLinkClick("desserts");
              setActiveSection("drinks");
            }}
          >
            Desserts
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MenuItens;
