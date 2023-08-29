import { useDispatch } from "react-redux";
import style from "./Order.module.css";
import { clearCart } from "../../redux/cart/actions";
import { useNavigate } from "react-router-dom";

const Order = ({setOrder, setChoosePayForm, setCartShow}) => {
  const orderNumber = Math.floor(Math.random() * 999);

  const dispatch = useDispatch()

  const navigate = useNavigate()


  const handleCloseOrder = (e) => {
    // e.preventDefault();

    if (
      e.target.classList.contains(style.bg_order) ||
      e.target.classList.contains(style.close)
      ) {
      // Ao clicar no ícone 'x' ou fora do content_order, fechar o Order, PayForm e ModalCart
      setOrder((order) => !order);
      setChoosePayForm((payForm) => !payForm)
      setCartShow((cartShow) => !cartShow)

      // Limpar o Cart Reduce
      dispatch(clearCart())

      // Redirecionar para a Home
      navigate('/totem-react')
    }
  };
  

  return (
    <div className={style.order}>
      <div className={style.bg_order} onClick={handleCloseOrder}>
        <div className={style.content_order}>
          <i className={`${style.close} + bi bi-x`}></i>

          <div className={style.orderApproved}>
            <div className={style.circle}>
              <i className="bi bi-check-lg"></i>
            </div>

            <div className={style.title}>
              <h4>Pagamento aprovado!</h4>
            </div>

            <hr />

            <div className={style.order_text}>
              <p>
                Seu pedido já está sendo produzido e logo será chamado no visor.
              </p>
              <p>Agradecemos a preferência!</p>
            </div>

            <div className={style.orderNumber}>
              <h4>
                Sua senha: <span>{orderNumber}</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
