import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const{loading,setLoading} = useGlobalContext()
  const[cocktail ,setCocktail] = React.useState(null);
  const {id} = useParams();


  React.useEffect(()=>{
    setLoading(true);
       const getCocktail = async() => {

      try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      console.log(data); 
      if(data.drinks){
        const{idDrink:id,strDrinkThumb:img,strDrink:name,strAlcoholic:info,strGlass:glass,strInstructions:instructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5} = data.drinks[0];
        const ingredients = [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5];
        const newCocktail = {name,id,img,info,glass,instructions,ingredients};
        setCocktail(newCocktail);
        setLoading(false);
        
    }
     else{
      setCocktail(null);
    }      
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
 
    getCocktail();
  },[id,setLoading])

  if(loading){
    return <Loading />
  }
  if(!cocktail){
    return <h2 className="section-title">No cocktail to display.</h2>
  }
  const {name,img,info,glass,instructions,ingredients} = cocktail;

  return (
    <section className="section cocktail-section">
      <Link  to="/" className='btn btn-primary' >
        Back Home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={img} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">Info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {ingredients.map((item,index)=>{
              return item ?   <span key={index} >{item}</span>:null
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
