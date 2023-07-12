import style from './Search.module.css'

const Search = ({searchHideShow}) => {
  return (
    <div className={`${style.search} + ${searchHideShow ? style.show : style.none}`}>
        <form>
            <label>
                <i className='bi bi-search'></i>
                <input type="text" placeholder='Buscar no cardápio'/>
            </label>
        </form>
    </div>
  )
}

export default Search