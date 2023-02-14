import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./Navbar.css"



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-dark" style={{backgroundColor: '#6b29bd'}}>
      <div className="container-fluid">
        <div className="navbar-img">
          <img src='./iconoPrincipal.png' className="logo" alt="Deepest Sympathy" height="50" width="50" style={{padding:"5px"}}/>
        </div>
        <a className="navbar-brand" href="#Inicio" style={{ marginLeft:"10px", fontFamily:"'Charm', cursive", fontSize:"2rem", fontWeight:"bolder", marginRight:"20px"}}>Deepest Sympathy</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={{fontFamily:'Lobster', fontSize:'1.2rem'}}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Inicio">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Nosotros">Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Productos">Productos</a>
              </li>
            </ul>
          </div>
      </div>

      <>
      <CartWidget />
      </>
    </nav>


 )
}

export default Navbar