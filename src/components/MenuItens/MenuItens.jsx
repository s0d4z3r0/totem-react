import style from "./MenuItens.module.css";

const MenuItens = ({ handleSetLinkItem }) => {
  // Seta o handleSetLinkItem com o nome do botão para scroll pra o Ref
  const handleNavLinkClick = (item) => {
    handleSetLinkItem(item);
  };

  return (
    <nav className={style.menuItens}>
      <ul className={style.itens}>
        <li className={style.item}>
          <button
            onClick={() => {
              handleNavLinkClick("burger");
            }}
          >
            Burgers
          </button>
        </li>
        <li className={style.item}>
          <button
            onClick={() => {
              handleNavLinkClick("fries");
            }}
          >
            Fries
          </button>
        </li>
        <li className={style.item}>
          <button
            onClick={() => {
              handleNavLinkClick("drinks");
            }}
          >
            Drinks
          </button>
        </li>
        <li className={style.item}>
          <button
            onClick={() => {
              handleNavLinkClick("desserts");
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
