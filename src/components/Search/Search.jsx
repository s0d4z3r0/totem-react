import { useEffect, useState } from "react";
import style from "./Search.module.css";

const Search = ({ searchHideShow, setSearchItem }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearchItem(search.toLowerCase());
  }, [setSearchItem, search]);

  return (
    <div
      className={`${style.search} + ${
        searchHideShow ? style.show : style.none
      }`}
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          <i className="bi bi-search"></i>
          <input
            type="text"
            placeholder="Buscar no cardápio"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default Search;
