// Style
import style from "./Menu.module.css";

// Hooks
import { useRef, useState } from "react";

// Components
import Cart from "../components/Cart/Cart";
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";
import MenuItens from "../components/MenuItens/MenuItens";
import CardsItens from "../components/CardsItens/CardsItens";
import Modal from "../components/Modal/Modal";
import Alert from "../components/Alert/Alert";
import PayForm from "../components/PayForm/PayForm";
import Order from "../components/Order/Order";

// Imagens
import Burger1 from "../img/burger-carousel1.png";
import Burger2 from "../img/burger-carousel2.png";
import Burger3 from "../img/burger-carousel3.png";
import Fries1 from "../img/fritas-bg1.png";
import Drink1 from "../img/bebida-bg1.png";
import Dessert1 from "../img/sorvete-bg1.png";
import Footer from "../components/Footer/Footer";

const Menu = () => {
  // Abrir ou fechar o input do Search
  const [searchHideShow, setSearchHideShow] = useState(false);
  // Input do component Search
  const [searchItem, setSearchItem] = useState("");
  // Abrir modal do Item, do Carrinho, da Forma de Pagamento e da Order.
  const [modal, setModal] = useState(false);
  const [cartShow, setCartShow] = useState(false);
  const [choosePayForm, setChoosePayForm] = useState(false);
  const [order, setOrder] = useState(false)
  // State do item clicado
  const [item, setItem] = useState("");
  // Abre o Alert confirmando adição no cart
  const [alertConfirm, setAlertConfirm] = useState(false);  

  // Setando Ref para clicar e ir para a seção correta
  const burgersRef = useRef(null);
  const friesRef = useRef(null);
  const drinksRef = useRef(null);
  const dessertsRef = useRef(null);

  // Scroll até a seção que o Ref apontar
  const handleSetLinkItem = (item) => {
    if (item === "burger") {
      burgersRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (item === "fries") {
      friesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (item === "drinks") {
      drinksRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (item === "desserts") {
      dessertsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Itens do cardápio
  const burgersTypes = [
    {
      id: Math.floor(Math.random() * 1000),
      name: "sublunch",
      description:
        "Pão baguete, 120g de filé fatiado, alface, tomate, picles, molho secreto da casa.",
      price: 20,
      image: Burger1,
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "supperpig",
      description: "Pão, burger 120g, queijo e bacon.",
      price: 18,
      image: Burger2,
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "cheesepork",
      description: "Pão, alface, burger 120g, mix de queijos, pulled pork.",
      price: 22,
      image: Burger3,
    },
  ];
  const friesTypes = [
    {
      id: Math.floor(Math.random() * 1000),
      name: "simple fries",
      description: "150g Batata-frita crinkle, sequinha e crocante.",
      price: 8,
      image: Fries1,
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "super fries",
      description: "300g Batata-frita crinkle, sequinha e crocante.",
      price: 14,
      image: Fries1,
    },
  ];
  const drinksTypes = [
    {
      id: Math.floor(Math.random() * 1000),
      name: "Coca-Cola",
      description: "Coca-cola 400ml.",
      price: 8,
      image: Drink1,
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Coca-Cola Zero",
      description: "Coca-Cola Zero 400ml.",
      price: 8,
      image: Drink1,
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Fanta-Laranja",
      description: "Fanta-Laranja 400ml.",
      price: 8,
      image: Drink1,
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Sprite",
      description: "Sprite 400ml.",
      price: 8,
      image: Drink1,
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Soda-Zero",
      description: "Soda-Zero 400ml.",
      price: 8,
      image: Drink1,
    },
  ];
  const dessertsTypes = [
    {
      id: Math.floor(Math.random() * 1000),
      name: "Shake Chocolate",
      description: "Delicioso milk-shake sabor Chocolate.",
      price: 10,
      image: Dessert1,
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Shake Morango",
      description: "Delicioso milk-shake sabor Morango.",
      price: 10,
      image: Dessert1,
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Shake Baunilha",
      description: "Delicioso milk-shake sabor Baunilha.",
      price: 10,
      image: Dessert1,
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Shake Chiclete",
      description: "Delicioso milk-shake sabor Chiclete.",
      price: 12,
      image: Dessert1,
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Shake Maracujá",
      description: "Delicioso milk-shake sabor Maracujá.",
      price: 12,
      image: Dessert1,
    },
  ];

  // Criando um array apenas com o itens pesquisados no search
  const matchItens = (item, matchFood) => {
    const nameMatch = item.name.toLowerCase().includes(matchFood);
    const descriptionMatch = item.description.toLowerCase().includes(matchFood);
    return nameMatch || descriptionMatch;
  };

  // Filtrar o search nas seções do cardápio
  const filteredBurgers = burgersTypes.filter((burger) =>
    matchItens(burger, searchItem)
  );
  const filteredFries = friesTypes.filter((frie) =>
    matchItens(frie, searchItem)
  );
  const filteredDrinks = drinksTypes.filter((drink) =>
    matchItens(drink, searchItem)
  );
  const filteredDesserts = dessertsTypes.filter((dessert) =>
    matchItens(dessert, searchItem)
  );

  return (
    <div className={style.menu}>
      {modal ? (
        <Modal
          setModal={setModal}
          item={item}
          setAlertConfirm={setAlertConfirm}
        />
      ) : (
        ""
      )}
      {cartShow ? (
        <Modal setCartShow={setCartShow} setChoosePayForm={setChoosePayForm}/>
      ) : (
        ""
      )}
      <Alert alertConfirm={alertConfirm} />
      {choosePayForm ? (
        <PayForm setChoosePayForm={setChoosePayForm} setOrder={setOrder}/>
      ) : (
        ''
      )}
      {order ? (<Order setOrder={setOrder} setChoosePayForm={setChoosePayForm} setCartShow={setCartShow}/>) : ('')}
      <div className={style.navbar}>
        <Navbar setSearchHideShow={setSearchHideShow} />
        <MenuItens handleSetLinkItem={handleSetLinkItem} />
        <Search searchHideShow={searchHideShow} setSearchItem={setSearchItem} />
      </div>
      <div className={style.itens}>
        <section ref={burgersRef}>
          {filteredBurgers &&
            (filteredBurgers.length >= 1 ? (
              <div className={style.burgers}>
                <h2>Burgers</h2>
                <CardsItens
                  foods={filteredBurgers}
                  setModal={setModal}
                  setItem={setItem}
                />
              </div>
            ) : (
              ""
            ))}
        </section>
        <section ref={friesRef}>
          {filteredFries &&
            (filteredFries.length >= 1 ? (
              <div className={style.fries}>
                <h2>Fries</h2>
                <CardsItens
                  foods={filteredFries}
                  setModal={setModal}
                  setItem={setItem}
                />
              </div>
            ) : (
              ""
            ))}
        </section>
        <section ref={drinksRef}>
          {filteredDrinks &&
            (filteredDrinks.length >= 1 ? (
              <div className={style.drinks}>
                <h2>Drinks</h2>
                <CardsItens
                  foods={filteredDrinks}
                  setModal={setModal}
                  setItem={setItem}
                />
              </div>
            ) : (
              ""
            ))}
        </section>
        <section ref={dessertsRef}>
          {filteredDesserts &&
            (filteredDesserts.length >= 1 ? (
              <div className={style.drinks}>
                <h2>Desserts</h2>
                <CardsItens
                  foods={filteredDesserts}
                  setModal={setModal}
                  setItem={setItem}
                />
              </div>
            ) : (
              ""
            ))}
        </section>
      </div>
      <div className={style.cart}>
        <Cart setCartShow={setCartShow} />
      </div>
      <Footer/>
    </div>
  );
};

export default Menu;
