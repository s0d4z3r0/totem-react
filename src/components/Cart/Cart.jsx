import style from './Cart.module.css'

const Cart = ({setCartShow}) => {

  const handleOpenCart = (e) => {
    e.preventDefault()

    setCartShow((prevCartShow) => !prevCartShow)
    
  }


  return (
    <div className={style.cartBar}>
        <div className={style.cart}>
            <i className='bi bi-cart4' onClick={handleOpenCart}></i>
        </div>
    </div>
  )
}

export default Cart