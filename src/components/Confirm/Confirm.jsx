import style from "./Confirm.module.css";

const Confirm = ({ alertConfirm }) => {
  return (
    <div
      className={
        style.confirm + ` ${alertConfirm ? style.confirmed : style.confirmedHide}`
      }
    >
      <div className={style.bg_confirm}>
        <div className={style.content_confirm}>
          <p>Item adicionado ao carrinho com sucesso.</p>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
