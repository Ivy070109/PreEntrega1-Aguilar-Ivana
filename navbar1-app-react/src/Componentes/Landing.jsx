import React from 'react'
import Navbar from './Navbar JS/Navbar'
import ItemListContainer from './ItemListContainer/ItemListContainer'

const Landing = () => {
  return (
    <>
        <Navbar />

        <ItemListContainer greeting="Bienvenidos a Deepest Sympathy Store, donde conseguirás todo para estar a la moda!" />
    </>
  )
}

export default Landing