import React, { useState } from 'react'
import { NavbarContainer, LeftContainer, RightContainer, NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer, NavbarLink, OpenLinksButton, NavbarLinkExtended } from '../styles/Navbar.style'
// import Logo component from styles
// import LogoImage from '../assets/logo.png - pass this to Logo as src

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false)

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/products">Boards</NavbarLink>
            <NavbarLink to="/contact">Contact</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
            <OpenLinksButton 
              onClick={() => {
                setExtendNavbar((curr) => !curr)
              }}>
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>

        </LeftContainer>
        <RightContainer>
          {/* <Logo src={LogoImage}/> */}
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (<NavbarExtendedContainer>
        <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
        <NavbarLinkExtended to="/products">Boards</NavbarLinkExtended>
        <NavbarLinkExtended to="/contact">Contact</NavbarLinkExtended>
        <NavbarLinkExtended to="/about">About</NavbarLinkExtended>
      </NavbarExtendedContainer>)}
    </NavbarContainer>
  )
}

export default Navbar