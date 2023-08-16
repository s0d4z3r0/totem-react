import { useEffect } from "react";
import style from "./Modal.module.css";

const Modal = ({ item, setModal, setAlertConfirm }) => {


  const handleModal = (e) => {
    e.preventDefault();

    if (
      e.target.classList.contains(style.bg_modal) ||
      e.target.classList.contains("bi-x")
    ) {
      setModal((prevModal) => !prevModal);
    }
  };

  const handleAlert = (e) => {
    e.preventDefault()

    setAlertConfirm(true)

    const timeOutAlertConfirm = setTimeout(() => {
      setAlertConfirm((prevAlertConfirm) => !prevAlertConfirm)
    }, 2000)

    return () => {
      clearTimeout(timeOutAlertConfirm)
    }
  }

  return (
    <div className={style.modal}>
      <div className={style.bg_modal} onClick={handleModal}>
        <div className={style.content_modal}>
          {item ? (
            <div className={style.item}>
              <div className={style.img}>
                <img src={item.image} alt="" />
                <i className="bi bi-x"></i>
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
                <h3>{item.price.toFixed(2).replace('.', ',')}</h3>
              </div>
              <button className={style.add} onClick={handleAlert}>Adicionar</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
