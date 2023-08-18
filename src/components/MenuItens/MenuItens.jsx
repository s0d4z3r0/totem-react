import style from "./MenuItens.module.css";
import burgerIcon from '../../assets/burger-vector-icon.png'
import friesIcon from '../../assets/fries-vector-icon.png'
import drinksIcon from '../../assets/drinks-vector-icon.png'
import dessertsIcon from '../../assets/desserts-vector-icon.png'

const MenuItens = ({ handleSetLinkItem }) => {
  // Seta o handleSetLinkItem com o nome do botão para scroll pra o Ref
  const handleNavLinkClick = (item) => {
    handleSetLinkItem(item);
  };

  const burgerVector = burgerIcon
  const friesVector = friesIcon
  const drinksVector = drinksIcon
  const dessertsVector = dessertsIcon


  return (
    <nav className={style.menuItens}>
      <ul className={style.itens}>
        <li className={style.item}>
          <button
            onClick={() => {
              handleNavLinkClick("burger");
            }}
          >
            <img src={burgerVector} alt="burger icon" />
          </button>
        </li>
        <li className={style.item}>
          <button
            onClick={() => {
              handleNavLinkClick("fries");
            }}
          >
            <img src={friesVector} alt="fries icon" />
          </button>
        </li>
        <li className={style.item}>
          <button
            onClick={() => {
              handleNavLinkClick("drinks");
            }}
          >
            <img src={drinksVector} alt="drinks icon" />
          </button>
        </li>
        <li className={style.item}>
          <button
            onClick={() => {
              handleNavLinkClick("desserts");
            }}
          >
            <img src={dessertsVector} alt="desserts icon" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MenuItens;
