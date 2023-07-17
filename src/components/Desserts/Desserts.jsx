import style from './Desserts.module.css'
import CardsItens from '../CardsItens/CardsItens'
import Dessert1 from '../../img/sorvete-bg.png'

const Desserts = () => {
  const dessertsTypes = [
    {
      name: 'Chocolate',
      description: 'Casquinha com 1 bola de sorvete sabor Chocolate.',
      price: 6,
      image: Dessert1
    },
    {
      name: 'Morango',
      description: 'Casquinha com 1 bola de sorvete sabor Morango.',
      price: 6,
      image: Dessert1
    },
    {
      name: 'Baunilha',
      description: 'Casquinha com 1 bola de sorvete sabor Baunilha.',
      price: 6,
      image: Dessert1
    },
    {
      name: 'Chiclete',
      description: 'Casquinha com 1 bola de sorvete sabor Chiclete.',
      price: 9,
      image: Dessert1
    },
  ]


  return (
    <div className={style.drinks}>
        <h2>Desserts</h2>
        <CardsItens foods={dessertsTypes}/>
    </div>
  )
}

export default Desserts