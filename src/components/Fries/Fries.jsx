import style from './Fries.module.css'
import CardsItens from '../CardsItens/CardsItens'
import Fries1 from '../../img/fritas-bg.png'

const Fries = () => {
  const friesTypes = [
    {
      name: 'simple fries',
      description: '150g Batata-frita crinkle, sequinha e crocante.',
      price: 8,
      image: Fries1
    },
    {
      name: 'super fries',
      description: '300g Batata-frita crinkle, sequinha e crocante.',
      price: 14,
      image: Fries1
    },
  ]


  return (
    <div className={style.fries}>
        <h2>Fries</h2>
        <CardsItens foods={friesTypes}/>
    </div>
  )
}

export default Fries