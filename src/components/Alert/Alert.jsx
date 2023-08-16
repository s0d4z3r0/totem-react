import style from "./Alert.module.css";

const Alert = ({ alertConfirm }) => {
  return (
    <div
      className={
        style.alert + ` ${alertConfirm ? style.confirmed : style.confirmedHide}`
      }
    >
      <div className={style.bg_alert}>
        <div className={style.content_alert}>
          <p>Item adicionado ao carrinho com sucesso.</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
