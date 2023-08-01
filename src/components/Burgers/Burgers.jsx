import style from './Burgers.module.css'
import CardsItens from '../CardsItens/CardsItens'
import Burger1 from '../../img/burger-carousel1.png'
import Burger2 from '../../img/burger-carousel2.png'
import Burger3 from '../../img/burger-carousel3.png'
import { forwardRef } from 'react'

const Burgers = ({}, ref) => {
  const burgersTypes = [
    {
      name: 'sublunch',
      description: 'Pão baguete, filés 120g, alface, tomate, picles, molho secreto da casa',
      price: 20,
      image: Burger1
    },
    {
      name: 'supperpig',
      description: 'Pão, burger 120g, quejo e bacon',
      price: 18,
      image: Burger2
    },
    {
      name: 'cheesepork',
      description: 'Pão, alface, burger 120g, mix de queijos, pulled pork',
      price: 22,
      image: Burger3
    },
  ]


  return (
    <div className={style.burgers} ref={ref}>
        <h2>Burgers</h2>
        <CardsItens foods={burgersTypes}/>
    </div>
  )
}

export default forwardRef(Burgers)