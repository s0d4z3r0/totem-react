import { useSelector } from "react-redux";
import style from "./Cart.module.css";
import { selectProductsCount } from "../../redux/cart/cart.selectors";

const Cart = ({ setCartShow }) => {
  // Abrir carrinho
  const handleOpenCart = (e) => {
    e.preventDefault();

    setCartShow((prevCartShow) => !prevCartShow);
  };

  // Usar selector para saber quantity de itens no carrinho
  // Settar quantidade de produtos no carrinho
  const productsQtyTotal = useSelector(selectProductsCount)

  return (
    <div className={style.cartBar}>
      <div className={style.cart}>
        {productsQtyTotal ? (
          <div className={style.circle}>
            <p>{productsQtyTotal}</p>
          </div>
        ) : (
          ""
        )}
        <i className="bi bi-cart4" onClick={handleOpenCart}></i>
      </div>
    </div>
  );
};

export default Cart;
