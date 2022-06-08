import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id,name,img,glass,info}) => {
  return (
    <div className="cocktail">
      <img src={img} alt={name} />
      <footer className='cocktail-footer'>
          <h3>{name}</h3>
          <h4>{info}</h4>
          <p>{glass}</p>
          <Link to={`/cocktail/${id}`}  className="btn btn-primary btn-details">
            details
          </Link>
      </footer>
    </div>
  )
}

export default Cocktail
