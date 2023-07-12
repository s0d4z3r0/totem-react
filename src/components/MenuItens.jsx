import style from './MenuItens.module.css'
import { Link } from 'react-router-dom'

const MenuItens = () => {
  return (
    <div className={style.menuItens}>
        <div className={style.itens}>
            <div className={style.item}>
                <Link>
                <p>Burgers</p>
                </Link>
            </div>
            <div className={style.item}>
                <Link>
                <p>Fries</p>
                </Link>
            </div>
            <div className={style.item}>
                <Link>
                <p>Drinks</p>
                </Link>
            </div>
            <div className={style.item}>
                <Link>
                <p>Desserts</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default MenuItens