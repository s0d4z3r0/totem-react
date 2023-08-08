import style from './CardsItens.module.css'

const CardsItens = ({foods}) => {

  const handleViewItem = (item) => {
    console.log(item)

  }

  return (
      <div className={style.cardsItens} >
        {foods ? foods.map((food) => (
          <div className={style.itens} key={food.name} onClick={() => handleViewItem(food)}>
            <div className={style.text}>
                <h4>{food.name}</h4>
                <p>{food.description}</p>
                <p>R${food.price.toFixed(2).replace('.', ',')}</p>
            </div>
            <div className={style.img}>
                <img src={food.image} alt={food.name} />
            </div>
          </div>
        )) : ''}
      </div>
  )
}

export default CardsItens