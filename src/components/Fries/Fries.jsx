import style from "./Fries.module.css";
import CardsItens from "../CardsItens/CardsItens";
import Fries1 from "../../img/fritas-bg1.png";
import { forwardRef } from "react";

const Fries = ({ searchItem }, ref) => {
  const friesTypes = [
    {
      name: "simple fries",
      description: "150g Batata-frita crinkle, sequinha e crocante.",
      price: 8,
      image: Fries1,
    },
    {
      name: "super fries",
      description: "300g Batata-frita crinkle, sequinha e crocante.",
      price: 14,
      image: Fries1,
    },
  ];

  // Criando um array apenas com o itens pesquisados no search
  const matchFries = (fries, searchFood) => {
    const nameMatch = fries.name.toLowerCase().includes(searchFood);
    const descriptionMatch = fries.description
      .toLowerCase()
      .includes(searchFood);
    return nameMatch || descriptionMatch;
  };
  const filteredFries = friesTypes.filter((fries) =>
    matchFries(fries, searchItem)
  );

  return (
    <>
      {filteredFries ? (
        filteredFries.length >= 1 ? (
          <div className={style.fries} ref={ref}>
            <h2>Fries</h2>
            <CardsItens foods={filteredFries} />
          </div>
        ) : (
          ""
        )
      ) : (
        <div className={style.fries} ref={ref}>
          <h2>Fries</h2>
          <CardsItens foods={friesTypes} />
        </div>
      )}
    </>
  );
};

export default forwardRef(Fries);
