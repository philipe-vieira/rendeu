import React from 'react'
import { BsPeopleCircle } from 'react-icons/bs';

import './styles.css'
import logomarca from '../../assets/logomarca-360x720.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="row">
      <div className="logo">
        <Link to="/home">
          <img src={logomarca} alt="Rendeu" />
        </Link>
      </div>
      <div className="items">
        <h2>Items </h2>
          <BsPeopleCircle 
            size={28} 
            color="#fff" 
            onClick={() => { alert('Clicou') }} 
          />
      </div>
    </div>
  )
}

export default Navbar