import style from './Menu.module.css'

import { useRef, useState } from 'react'

import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Search from '../components/Search/Search'
import MenuItens from '../components/MenuItens/MenuItens'
import Burgers from '../components/Burgers/Burgers'
import Fries from '../components/Fries/Fries'
import Drinks from '../components/Drinks/Drinks'
import Desserts from '../components/Desserts/Desserts'

const Menu = () => {
  const [searchHideShow, setSearchHideShow] = useState(false)
  const [searchItem, setSearchItem] = useState('')

  const burgersRef = useRef(null)
  const friesRef = useRef(null)
  const drinksRef = useRef(null)
  const dessertsRef = useRef(null)

  const handleSetLinkItem = (item) => {
    if(item === 'burger'){
      burgersRef.current?.scrollIntoView({ behavior: 'smooth'})
    }else if(item === 'fries'){
      friesRef.current?.scrollIntoView({behavior: 'smooth'})
    }else if(item === 'drinks'){
      drinksRef.current?.scrollIntoView({behavior: 'smooth'})
    }else if(item === 'desserts'){
      dessertsRef.current?.scrollIntoView({behavior: 'smooth'})
    }
  }


  return (
    <div className={style.menu}>
        <div className={style.navbar}>
          <Navbar searchHideShow={searchHideShow} setSearchHideShow={setSearchHideShow}/>
          <MenuItens handleSetLinkItem={handleSetLinkItem}/>
          <Search searchHideShow={searchHideShow} setSearchItem={setSearchItem}/>
        </div>
        <div className={style.itens}>
          <Burgers ref={burgersRef} searchItem={searchItem}/>
          <Fries ref={friesRef} searchItem={searchItem}/>
          <Drinks ref={drinksRef} searchItem={searchItem}/>
          <Desserts ref={dessertsRef} searchItem={searchItem}/>
        </div>
        <div className={style.cart}><Footer/></div>
    </div>
  )
}

export default Menu