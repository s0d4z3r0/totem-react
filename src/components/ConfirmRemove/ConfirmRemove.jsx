import { useDispatch, useSelector } from "react-redux";
import style from "./ConfirmRemove.module.css";
import { removeProductFromCart } from "../../redux/cart/actions";

const ConfirmRemove = ({ confirmRemove, setConfirmRemove, removeId }) => {
  {
    /* ---------------------- FUNÇÕES REDUCER ------------------------------------- */
  }
  const dispatch = useDispatch();
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  // Ao cancelar, apenas fecha o modal
  const handleCancel = () => {
    setConfirmRemove((prevConfirmRemove) => !prevConfirmRemove);
    return;
  };
  // Ao remover, remove o item com o removeId selecionado
  const handleRemove = () => {
    dispatch(removeProductFromCart(removeId));
    setConfirmRemove((prevConfirmRemove) => !prevConfirmRemove);
  };

  return (
    <div
    className={
      style.confirmRemove +
      ` ${
        confirmRemove ? style.confirmRemoveOpen : style.confirmedRemoveHide
      }`
    }
    >
      {products
        ? products.map((product) => (
            <div className={style.bg_confirmRemove} key={product.id}>
              <div className={style.content_confirmRemove}>
                <span>Deseja realmente remover o item do carrinho?</span>
                <div className={style.content_buttons}>
                  <button
                    className={style.button_cancel}
                    onClick={() => handleCancel(product)}
                  >
                    Cancelar
                  </button>
                  <button
                    className={style.button_remove}
                    onClick={() => handleRemove(product)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default ConfirmRemove;
