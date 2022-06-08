import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='section-center'  >
      <h2>Oops! You have come to dead end.</h2>
      <Link to='/' className='btn btn-primary'>Back Home</Link>
    </section>
  )
}

export default Error
