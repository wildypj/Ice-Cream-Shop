import React from 'react'
import { Cone, Nav, NavIcon, NavLink } from './Navbar.styled';


function Navbar({toggle}) {
  return (
    <>
        <Nav>
            <NavLink to='/'>Gelato</NavLink>
            <NavIcon onClick={toggle}>
                <p>Menu</p>
                <Cone />
            </NavIcon>
        </Nav>
    </>
  )
}

export default Navbar