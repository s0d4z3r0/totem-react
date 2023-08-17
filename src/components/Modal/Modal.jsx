import style from "./Modal.module.css";

import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/actions";

const Modal = ({ item, setModal, setAlertConfirm, setCartShow }) => {
  const dispatch = useDispatch();

  // Ao clicar no ícone 'x' ou fora do modal, fechar o modal
  const handleModal = (e) => {
    e.preventDefault();

    if (
      e.target.classList.contains(style.bg_modal) ||
      e.target.classList.contains(style.close)
    ) {
      setModal((prevModal) => !prevModal);
    }
  };

  // Ao clicar no ícone 'x' ou fora do CartModal, fechar o CartModal
  const handleCartModal = (e) => {
    e.preventDefault();

    if (
      e.target.classList.contains(style.bg_cartModal) ||
      e.target.classList.contains(style.close)
    ) {
      setCartShow((prevCartShow) => !prevCartShow);
    }
  };

  // Adiciona o item ao reducer e abre Alerta de Confirmação de add pedido
  const handleProductClick = (e) => {
    e.preventDefault();

    dispatch(addProductToCart(item));

    // Abre modal de confirmação de add pedido
    setAlertConfirm(true);

    const timeOutAlertConfirm = setTimeout(() => {
      setAlertConfirm((prevAlertConfirm) => !prevAlertConfirm);
    }, 2000);

    return () => {
      clearTimeout(timeOutAlertConfirm);
    };
  };

  return (
    <>
      {item ? (
        // MODAL ITEM
        <div className={style.modal}>
          <div className={style.bg_modal} onClick={handleModal}>
            <div className={style.content_modal}>
              <div className={style.item}>
                <div className={style.img}>
                  <img src={item.image} alt="" />
                  <i className={`${style.close} + bi bi-x`}></i>
                </div>
                <div className={style.name}>
                  <h3>{item.name}</h3>
                </div>
                <hr className={style.line} />
                <div className={style.description}>
                  <p>{item.description}</p>
                </div>
                <div className={style.price}>
                  <p>R$</p>
                  <h3>{item.price.toFixed(2).replace(".", ",")}</h3>
                </div>
                <button className={style.add} onClick={handleProductClick}>
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // MODAL CART
        <div className={style.cartModal}>
          <div className={style.bg_cartModal} onClick={handleCartModal}>
            <div className={style.content_cartModal}>
              <div className={style.cart}>
                <i className={`${style.close} + bi bi-x`}></i>
                <h3 className={style.titleCart}>Resumo do Pedido</h3>
                <hr className={style.line} />
                <div className={style.productList}>
                  {/* Estrutura para fazer o map */}
                  <div className={style.productCart}>
                    <div className={style.qty}>
                      <i className="bi bi-dash-circle"></i>
                      <input
                        type="text"
                        disabled
                        value={"1"}
                        className={style.inputQty}
                      />
                      <i className="bi bi-plus-circle"></i>
                    </div>
                    <div className={style.nameProduct}>
                      <p>{/*item.name*/}sublunch</p>
                    </div>
                    <div className={style.priceProduct}>
                      <p>R$</p>
                      {/* {item.price.toFixed(2).replace('.', ',')} */}22,00
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.totalPriceAndPayButton}>
                <div className={style.totalPrice}>
                  <p>TOTAL</p>
                  <p>R$</p>
                  <p>{/*reduce(item.price)*/}22,00</p>
                </div>
                <div className={style.payButton}>
                  <button className={style.pay} onClick={handleProductClick}>
                    Pagar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
