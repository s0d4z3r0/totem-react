import style from './Loading.module.css'

const Loading = () => {
  return (
    <div className={style.loading}>
        <div className={style.bg_loading}>
            <div className={style.content_loading}>
                <h3>Processando pagamento...</h3>
                <div className={style.custom_loader}></div>
            </div>
        </div>
    </div>
  )
}

export default Loading