import style from "./Burgers.module.css";
import CardsItens from "../CardsItens/CardsItens";
import Burger1 from "../../img/burger-carousel1.png";
import Burger2 from "../../img/burger-carousel2.png";
import Burger3 from "../../img/burger-carousel3.png";
import { forwardRef } from "react";

const Burgers = ({ searchItem }, ref) => {
  const burgersTypes = [
    {
      name: "sublunch",
      description:
        "Pão baguete, 120g de filé fatiado, alface, tomate, picles, molho secreto da casa",
      price: 20,
      image: Burger1,
    },
    {
      name: "supperpig",
      description: "Pão, burger 120g, queijo e bacon",
      price: 18,
      image: Burger2,
    },
    {
      name: "cheesepork",
      description: "Pão, alface, burger 120g, mix de queijos, pulled pork",
      price: 22,
      image: Burger3,
    },
  ];

  // Criando um array apenas com o itens pesquisados no search
  const matchBurgers = (burger, searchFood) => {
    const nameMatch = burger.name.toLowerCase().includes(searchFood);
    const descriptionMatch = burger.description
      .toLowerCase()
      .includes(searchFood);
    return nameMatch || descriptionMatch;
  };
  const filteredBurgers = burgersTypes.filter((burger) =>
    matchBurgers(burger, searchItem)
  );

  return (
    <>
      {filteredBurgers ? (
        filteredBurgers.length >= 1 ? (
          <div className={style.burgers} ref={ref}>
            <h2>Burgers</h2>
            <CardsItens foods={filteredBurgers} />
          </div>
        ) : (
          ""
        )
      ) : (
        <div className={style.burgers} ref={ref}>
          <h2>Burgers</h2>
          <CardsItens foods={burgersTypes} />
        </div>
      )}
    </>
  );
};

export default forwardRef(Burgers);
