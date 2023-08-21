import style from "./Modal.module.css";

import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, lessProductFromCart, moreProductToCart, removeProductFromCart } from "../../redux/cart/actions";
import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";

const Modal = ({ item, setModal, setAlertConfirm, setCartShow }) => {
  {
    /* ---------------------- FUNÇÕES CSS ------------------------------------- */
  }
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

  {
    /* ---------------------- FUNÇÕES REDUCER ------------------------------------- */
  }

  const dispatch = useDispatch();
  
  // Resgatar o products do reducer
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  // Resgatar o valor total do reducer
  const productsTotalPrice = useSelector(selectProductsTotalPrice)


  // Adiciona o item ao carrinho e abre Alerta de 'Item adicionado'
  const handleAddProduct = (e) => {
    e.preventDefault();

    // Adiciona o item ao Reducer
    dispatch(addProductToCart(item));

    // Abre modal de confirmação de add pedido
    // setAlertConfirm(true);

    // const timeOutAlertConfirm = setTimeout(() => {
    //   setAlertConfirm((prevAlertConfirm) => !prevAlertConfirm);
    // }, 2000);

    // return () => {
    //   clearTimeout(timeOutAlertConfirm);
    // };
  };
  
  // +1 item do carrinho 
  const handleMoreProduct = (products) => {
    
    dispatch(moreProductToCart(products.id))
  }
  
  // -1 item do carrinho 
  const handleLessProduct = (products) => {
    
    if(products.quantity >= 2){
      dispatch(lessProductFromCart(products.id))
      // Abre a confirmação para saber se deseja remover o item do carrinho 
    }else{
      setAlertConfirm(prevAlertConfirm => !prevAlertConfirm)
      dispatch(removeProductFromCart(products.id))
    }
  }


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
                  <ul>
                    {products ? products.map((products) => (
                      <li key={products.name}>
                        <div className={style.productCart}>
                          <div className={style.qty}>
                            <i className="bi bi-dash-circle" onClick={() => handleLessProduct(products)}></i>
                            <input
                              type="text"
                              disabled
                              value={products.quantity}
                              className={style.inputQty}
                            />
                            <i className="bi bi-plus-circle" onClick={() => handleMoreProduct(products)}></i>
                          </div>
                          <div className={style.nameProduct}>
                            <p>{products.name}</p>
                          </div>
                          <div className={style.priceProduct}>
                            <p>R$</p>
                            {products.price.toFixed(2).replace(".", ",")}
                          </div>
                        </div>
                      </li>
                    )) : ''}
                  </ul>
                </div>
              </div>
              <div className={style.totalPriceAndPayButton}>
                <div className={style.totalPrice}>
                  <p>TOTAL</p>
                  <p>R$</p>
                  <p>{productsTotalPrice.toFixed(2).replace('.', ',')}</p>
                </div>
                <div className={style.payButton}>
                  <button className={style.pay} >Pagar</button>
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
