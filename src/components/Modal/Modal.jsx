import style from './Modal.module.css'

const Modal = ({item}) => {
  return (
    <div className={style.modal}>
        <div className={style.bg_modal}>
            <div className={style.content_modal}>
                {item ? (
                    <div className={style.item}>
                        <div className="style_img">{item.img}</div>
                        <div className="style_title">{item.title}</div>
                        <div className="style_description">{item.description}</div>
                        <div className="style price">{item.price}</div>
                        <button>Adicionar</button>
                    </div>
                ) : ('')}
            </div>
        </div>
    </div>
  )
}

export default Modal