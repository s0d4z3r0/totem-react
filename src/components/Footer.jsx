import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.footer}>
        <div className={style.cart}>
            <i className='bi bi-cart4'></i>
        </div>
    </div>
  )
}

export default Footer