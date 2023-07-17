import style from './Menu.module.css'

import { useState } from 'react'

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

  return (
    <div className={style.menu}>
        <Navbar searchHideShow={searchHideShow} setSearchHideShow={setSearchHideShow}/>
        <MenuItens/>
        <Search searchHideShow={searchHideShow}/>
        <Burgers/>
        <Fries/>
        <Drinks/>
        <Desserts/>
        <Footer/>
    </div>
  )
}

export default Menu