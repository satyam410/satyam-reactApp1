import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [searchTerm, setsearchTerm] = useState('a')
  const [loading, setLoading] = useState(false)
  const [cocktailList, setcocktailList] = useState([]);


  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`${url}${searchTerm}`);
    const data = await response.json();
    const { drinks } = data;
    try {
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrinkThumb, strDrink, strAlcoholic, strGlass } = item;
          return {
            id: idDrink, img: strDrinkThumb, name: strDrink, info: strAlcoholic, glass: strGlass
          }
        })
        setcocktailList(newCocktails);
        setLoading(false);
      }
      else {
        setLoading(false);
        setcocktailList([]);
      }
    } catch (error) {
      console.log(error);
    }


  }, [searchTerm])

  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData])







  return <AppContext.Provider value={{ setsearchTerm, loading, cocktailList, setLoading }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
