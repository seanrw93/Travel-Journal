import React from 'react'
import Logo from '../images/logo.svg'

const Navbar = () => {
  return (
    <nav>
        <img src={Logo} alt="logo" />
        <p className='title'>my travel journal.</p>  
    </nav>
  )
}

export default Navbar

