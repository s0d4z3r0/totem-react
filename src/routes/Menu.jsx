import style from './Menu.module.css'

import { useState } from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import MenuItens from '../components/MenuItens'

const Menu = () => {
  const [searchHideShow, setSearchHideShow] = useState(true)

  return (
    <div className={style.menu}>
        <Navbar searchHideShow={searchHideShow} setSearchHideShow={setSearchHideShow}/>
        <MenuItens/>
        <Search searchHideShow={searchHideShow}/>
        <h1>MENU</h1>
        <Footer/>
    </div>
  )
}

export default Menu