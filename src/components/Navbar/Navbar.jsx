import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = ({searchHideShow, setSearchHideShow}) => {
  const handleSearch = (e) => {
    e.preventDefault()
    setSearchHideShow(!searchHideShow)
    
    console.log(searchHideShow)
  }

  return (
    <div className={style.navbar}>
      <div className={style.return}>
        <Link to="/totem-react">
          <i className='bi bi-chevron-left'></i>
        </Link>
      </div>
      <div className={style.search}>
          <i className='bi bi-search' onClick={handleSearch}></i>
      </div>
    </div>
  );
};

export default Navbar;
