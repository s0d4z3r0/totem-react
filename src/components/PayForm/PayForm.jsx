import { useState } from "react";
import style from "./PayForm.module.css";

import Loading from "../Loading/Loading";

const PayForm = ({ setChoosePayForm }) => {
  const [openLoading, setOpenLoading] = useState(false);
  // Ao clicar no ícone 'x' ou fora do CartModal, fechar o CartModal
  const handleChoosePayForm = (e) => {
    e.preventDefault();

    if (
      e.target.classList.contains(style.bg_cartModal) ||
      e.target.classList.contains(style.close)
    ) {
      setChoosePayForm((choosePayForm) => !choosePayForm);
    }
  };

  const [payForm, setPayForm] = useState("");

  const handlePayForm = (e) => {
    e.preventDefault();

    console.log(payForm);

    if (payForm != "debit" && payForm != "credit") {
      return
    } else {
      setOpenLoading(!openLoading);

      const timeOutLoading = setTimeout(() => {
        setOpenLoading(false);
      }, 4000);

      return () => {
        clearTimeout(timeOutLoading);
      };
    }
  };

  return (
    <div className={style.payForm}>
      {openLoading ? <Loading /> : ""}
      <div className={style.bg_payForm} onClick={handleChoosePayForm}>
        <div className={style.content_payForm}>
          <div className={style.box_payForm}>
            <i className={`${style.close} + bi bi-x`}></i>
            <h3 className={style.titlePayForm}>Forma de Pagamento</h3>
            <hr className={style.line} />

            <form className={style.selectPayForm}>
              <label>Selecione a forma de pagamento: </label>
              <select
                name="payForm"
                id="payForm"
                value={payForm}
                onChange={(e) => setPayForm(e.target.value)}
              >
                <option value="" >
                  Forma de pagamento...
                </option>
                <option value="debit">Débito</option>
                <option value="credit">Crédito</option>
              </select>

              <div className={style.totalPriceAndPayButton}>
                <div className={style.totalPrice}>
                  <p>TOTAL</p>
                  <p>R$</p>
                  <p>23,00</p>
                </div>
                <div className={style.payButton}>
                  <button className={style.pay} onClick={handlePayForm}>
                    Confirmar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayForm;
