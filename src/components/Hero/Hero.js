import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './Hero.styled'
import SideBar from '../Sidebar/SideBar'

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <HeroContainer>
        <Navbar toggle={toggle}/>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <HeroContent >
            <HeroItems>
                <HeroH1>Best Ice-Cream Shop</HeroH1>
                <HeroP>Treat yourSelf</HeroP>
                <HeroBtn>Order</HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero