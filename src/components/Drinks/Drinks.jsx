import style from "./Drinks.module.css";
import CardsItens from "../CardsItens/CardsItens";
import Drink1 from "../../img/bebida-bg1.png";
import { forwardRef } from "react";

const Drinks = ({ searchItem }, ref) => {
  const drinksTypes = [
    {
      name: "Coca-Cola",
      description: "Coca-cola 400ml.",
      price: 8,
      image: Drink1,
    },
    {
      name: "Coca-Cola Zero",
      description: "Coca-Cola Zero 400ml.",
      price: 8,
      image: Drink1,
    },
    {
      name: "Fanta-Laranja",
      description: "Fanta-Laranja 400ml.",
      price: 8,
      image: Drink1,
    },
    {
      name: "Sprite",
      description: "Sprite 400ml.",
      price: 8,
      image: Drink1,
    },
  ];

  // Criando um array apenas com o itens pesquisados no search
  const matchDrinks = (drinks, searchFood) => {
    const nameMatch = drinks.name.toLowerCase().includes(searchFood);
    const descriptionMatch = drinks.description
      .toLowerCase()
      .includes(searchFood);
    return nameMatch || descriptionMatch;
  };
  const filteredDrinks = drinksTypes.filter((drinks) =>
    matchDrinks(drinks, searchItem)
  );

  return (
    <>
      {filteredDrinks ? (
        filteredDrinks.length >= 1 ? (
          <div className={style.drinks} ref={ref}>
            <h2>Drinks</h2>
            <CardsItens foods={filteredDrinks} />
          </div>
        ) : (
          ""
        )
      ) : (
        <div className={style.drinks} ref={ref}>
          <h2>Drinks</h2>
          <CardsItens foods={drinksTypes} />
        </div>
      )}
    </>
  );
};

export default forwardRef(Drinks);
