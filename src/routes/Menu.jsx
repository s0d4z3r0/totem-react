import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <h1>MENU</h1>
        <Link to="/totem-react">Home</Link>
        <Link to="/totem-react/cart">Cart</Link>
    </div>
  )
}

export default Menu