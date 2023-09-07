import style from "./Modal.module.css";

// Imagens
import EmptyCart from '../../assets/carrinho-vazio.png'

// Hooks
import { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  lessProductFromCart,
  moreProductToCart,
} from "../../redux/cart/actions";
import { selectProductsCount, selectProductsTotalPrice } from "../../redux/cart/cart.selectors";

// Components
import ConfirmRemove from "../ConfirmRemove/ConfirmRemove";

const Modal = ({ item, setModal, setCartShow, setAlertConfirm, setChoosePayForm }) => {
  {
    /* ---------------------- FUNÇÕES CSS ------------------------------------- */
  }
  // Abre o Confirm para remover o item do cart
  const [confirmRemove, setConfirmRemove] = useState(false);

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

  // Abrir modal para forma de pagamento
  const handleChoosePayForm = (productsTotalPrice) => {
    if (productsTotalPrice <= 0){
      return
    }else{
      setChoosePayForm(choosePayForm => !choosePayForm);
    }
  };

  {
    /* ---------------------- FUNÇÕES REDUCER ------------------------------------- */
  }
  const dispatch = useDispatch();
  // Resposta para remover ou não
  const [removeId, setRemoveId] = useState("");
  // Resgatar o products do reducer
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  // Resgatar o valor total do reducer
  const productsTotalPrice = useSelector(selectProductsTotalPrice);
  // Quantidades de itens no carrinho
  const productsQtyTotal = useSelector(selectProductsCount)

  // Adiciona o item ao carrinho e abre Alerta de 'Item adicionado'
  const handleAddProduct = (e) => {
    e.preventDefault();

    // Adiciona o item ao Reducer
    dispatch(addProductToCart(item));

    // Abre modal de confirmação de add pedido
    setAlertConfirm(true);

    const timeOutAlertConfirm = setTimeout(() => {
      setAlertConfirm((prevAlertConfirm) => !prevAlertConfirm);
    }, 1000);

    return () => {
      clearTimeout(timeOutAlertConfirm);
    };
  };

  // +1 item do carrinho
  const handleMoreProduct = (product) => {
    dispatch(moreProductToCart(product.id));
  };

  // -1 item do carrinho
  const handleLessProduct = (product) => {
    if (product.quantity >= 2) {
      dispatch(lessProductFromCart(product.id));
    } else {
      // Abre modal para confirmar remoção
      setConfirmRemove(!confirmRemove);
    }
  };

  return (
    <>
      {confirmRemove ? (
        <ConfirmRemove
          confirmRemove={confirmRemove}
          setConfirmRemove={setConfirmRemove}
          removeId={removeId}
        />
      ) : (
        ""
      )}
      {item ? (
        // MODAL ITEM
        <div className={style.modal}>
          <div className={style.bg_modal} onClick={handleModal}>
            <div className={style.content_modal}>
              <div className={style.item}>
                <div className={style.img}>
                  <img src={item.image} alt="" />
                </div>

                  <i className={`${style.close} + bi bi-x`}></i>

                <div className={style.name}>
                  <h3>{item.name}</h3>
                </div>

                <hr className={style.line} />

                <div className={style.description}>
                  <p>{item.description}</p>
                </div>

                <div className={style.price}>
                  <p>R$</p>
                  <p>{item.price.toFixed(2).replace(".", ",")}</p>
                </div>
                
                <button className={style.add} onClick={handleAddProduct}>
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
                  <table className={style.productCartHead}>
                    <tbody>
                      <tr>
                        <th>Qtd</th>
                        <th>Produto</th>
                        <th>Preço/un</th>
                      </tr>
                    </tbody>
                  </table>
                  <ul>
                    {products
                      ? products.map((product) => (
                          <li key={product.id}>
                            <div className={style.productCart}>
                              <div className={style.qty}>
                                <i
                                  className="bi bi-dash-circle"
                                  onClick={() => {
                                    setRemoveId(product.id);
                                    handleLessProduct(product);
                                  }}
                                ></i>
                                <input
                                  type="text"
                                  disabled
                                  value={product.quantity}
                                  className={style.inputQty}
                                />
                                <i
                                  className="bi bi-plus-circle"
                                  onClick={() => handleMoreProduct(product)}
                                ></i>
                              </div>
                              <div className={style.nameProduct}>
                                <p>{product.name.toLowerCase()}</p>
                              </div>
                              <div className={style.priceProduct}>
                                <p>R$</p>
                                {product.price.toFixed(2).replace(".", ",")}
                              </div>
                            </div>
                          </li>
                        ))
                      : ('')}
                  </ul>
                      {productsQtyTotal === 0 ? (
                          <div className={style.emptyCart}>
                            <img src={EmptyCart} alt="Empty Cart" />
                            <p>Seu carrinho está vazio.</p>
                          </div>
                        ) : ('')}
                </div>
              </div>
              <div className={style.totalPriceAndPayButton}>
                <div className={style.totalPrice}>
                    <p>TOTAL</p>
                    <p>R$</p>
                    <p>{productsTotalPrice.toFixed(2).replace(".", ",")}</p>
                </div>
                <div className={style.payButton}>
                  <button
                    className={style.pay}
                    onClick={() => handleChoosePayForm(productsTotalPrice)}
                  >
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
