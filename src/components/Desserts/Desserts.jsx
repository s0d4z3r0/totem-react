import style from './Desserts.module.css'
import CardsItens from '../CardsItens/CardsItens'
import Dessert1 from '../../img/sorvete-bg1.png'
import { forwardRef } from 'react'

const Desserts = ({}, ref) => {
  const dessertsTypes = [
    {
      name: 'Shake Chocolate',
      description: 'Delicioso milk-shake sabor Chocolate.',
      price: 10,
      image: Dessert1
    },
    {
      name: 'Shake Morango',
      description: 'Delicioso milk-shake sabor Morango.',
      price: 10,
      image: Dessert1
    },
    {
      name: 'Shake Baunilha',
      description: 'Delicioso milk-shake sabor Baunilha.',
      price: 10,
      image: Dessert1
    },
    {
      name: 'Shake Chiclete',
      description: 'Delicioso milk-shake sabor Chiclete.',
      price: 12,
      image: Dessert1
    },
  ]


  return (
    <div className={style.drinks} ref={ref}>
        <h2>Desserts</h2>
        <CardsItens foods={dessertsTypes}/>
    </div>
  )
}

export default forwardRef(Desserts)