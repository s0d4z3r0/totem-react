import style from './Drinks.module.css'
import CardsItens from '../CardsItens/CardsItens'
import Drink1 from '../../img/bebida-bg.png'
import { forwardRef } from 'react'

const Drinks = ({}, ref) => {
  const drinksTypes = [
    {
      name: 'Coca-Cola',
      description: 'Coca-cola 400ml.',
      price: 8,
      image: Drink1
    },
    {
      name: 'Coca-Cola Zero',
      description: 'Coca-Cola Zero 400ml.',
      price: 8,
      image: Drink1
    },
    {
      name: 'Fanta-Laranja',
      description: 'Fanta-Laranja 400ml.',
      price: 8,
      image: Drink1
    },
    {
      name: 'Sprite',
      description: 'Sprite 400ml.',
      price: 8,
      image: Drink1
    },
  ]


  return (
    <div className={style.drinks} ref={ref}>
        <h2>Drinks</h2>
        <CardsItens foods={drinksTypes}/>
    </div>
  )
}

export default forwardRef(Drinks)