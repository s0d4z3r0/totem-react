import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = ({setSearchHideShow}) => {
  const handleSearch = (e) => {
    e.preventDefault()
    setSearchHideShow((prevSearchHideShow) => !prevSearchHideShow)
  }

  return (
    <div className={style.navbar}>
      <button className={style.return}>
        <Link to="/totem-react">
          <i className='bi bi-chevron-left'></i>
        </Link>
      </button>
      <button className={style.search}>
          <i className='bi bi-search' onClick={handleSearch}></i>
      </button>
    </div>
  );
};

export default Navbar;
