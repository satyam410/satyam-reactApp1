import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const{setsearchTerm} = useGlobalContext();
  const searchValue = React.useRef('');

  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  React.useEffect(() => {
    searchValue.current.focus();
  },[])
  const searchCocktail = () => {
    setsearchTerm(searchValue.current.value);
  }

  return ( 
      <section className="search">
        <form  onSubmit={handleSubmit}  className="search-form">
        <div className="form-control">
          <label htmlFor="name" >search your favourite cocktail</label>
          <input type='text' id='name' ref={searchValue} onChange={searchCocktail}  />
        </div>

        </form>
      </section>
  )
}

export default SearchForm
