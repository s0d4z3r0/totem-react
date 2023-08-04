import style from "./Desserts.module.css";
import CardsItens from "../CardsItens/CardsItens";
import Dessert1 from "../../img/sorvete-bg1.png";
import { forwardRef } from "react";

const Desserts = ({ searchItem }, ref) => {
  const dessertsTypes = [
    {
      name: "Shake Chocolate",
      description: "Delicioso milk-shake sabor Chocolate.",
      price: 10,
      image: Dessert1,
    },
    {
      name: "Shake Morango",
      description: "Delicioso milk-shake sabor Morango.",
      price: 10,
      image: Dessert1,
    },
    {
      name: "Shake Baunilha",
      description: "Delicioso milk-shake sabor Baunilha.",
      price: 10,
      image: Dessert1,
    },
    {
      name: "Shake Chiclete",
      description: "Delicioso milk-shake sabor Chiclete.",
      price: 12,
      image: Dessert1,
    },
  ];

  // Criando um array apenas com o itens pesquisados no search
  const matchDesserts = (dessert, searchFood) => {
    const nameMatch = dessert.name.toLowerCase().includes(searchFood);
    const descriptionMatch = dessert.description
      .toLowerCase()
      .includes(searchFood);
    return nameMatch || descriptionMatch;
  };
  const filteredDesserts = dessertsTypes.filter((dessert) =>
    matchDesserts(dessert, searchItem)
  );

  return (
    <>
      {filteredDesserts ? (
        filteredDesserts.length >= 1 ? (
          <div className={style.drinks} ref={ref}>
            <h2>Desserts</h2>
            <CardsItens foods={filteredDesserts} />
          </div>
        ) : (
          ""
        )
      ) : (
        <div className={style.drinks} ref={ref}>
          <h2>Desserts</h2>
          <CardsItens foods={dessertsTypes} />
        </div>
      )}
    </>
  );
};

export default forwardRef(Desserts);
