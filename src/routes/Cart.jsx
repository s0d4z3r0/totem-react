import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div>
        <h1>Cart</h1>
        <Link to="/totem-react">Home</Link>
        <Link to="/totem-react/menu">Menu</Link>
    </div>
  )
}

export default Cart