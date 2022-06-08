import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cocktailList , loading } = useGlobalContext();
  console.log(cocktailList)

  if(loading){
    return <Loading />
  }
  if(cocktailList.length < 1){
    return <h2 className="section-title">
      No cocktails matched your serach criteria.
    </h2>
  }
  
  
return (
    <section className="section">
      <h2 className="section-title">
        Cocktails
      </h2>
      <div className="cocktails-center">
      {cocktailList.map((item) => {
       return <Cocktail  key={item.id} {...item} />
      } )}
    </div>
      
    </section>

  )
  }
  

    
 


export default CocktailList
