import style from './Burgers.module.css'
import CardsItens from '../CardsItens/CardsItens'
import Burger1 from '../../img/burger-carousel1.jpg'
import Burger2 from '../../img/burger-carousel2.jpg'
import Burger3 from '../../img/burger-carousel3.jpg'

const Burgers = () => {
  const burgersTypes = [
    {
      name: 'cheeseburger',
      description: 'Pão, burger 120g, queijo prato, alface, tomate, picles, molho secreto da casa',
      price: 15,
      image: Burger1
    },
    {
      name: 'sublunch',
      description: 'Pão, frango, cebola, tomate e molho verde',
      price: 18,
      image: Burger2
    },
    {
      name: 'supperpig',
      description: 'Pão, bacon, burger 120g suíno, farofa de torresmo e bbq',
      price: 22,
      image: Burger3
    },
  ]


  return (
    <div className={style.burgers}>
        <h2>Burgers</h2>
        <CardsItens foods={burgersTypes}/>
    </div>
  )
}

export default Burgers