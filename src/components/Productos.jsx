import React from 'react'
import { useParams } from 'react-router-dom'

const Productos = () => {

  const params = useParams()
  console.log(params);


  return (
    <div>
        <h2>Usted ingresó al sitio del producto <h3>{params.id}</h3></h2>

    </div>
  )
}

export default Productos