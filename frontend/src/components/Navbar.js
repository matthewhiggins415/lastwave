import React, { useState, useEffect } from 'react'
import { NavbarContainer, LeftContainer, RightContainer, NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer, NavbarLink, OpenLinksButton, NavbarLinkExtended } from '../styles/Navbar.style'
// import Logo component from styles
// import LogoImage from '../assets/logo.png - pass this to Logo as src

const Navbar = ({ user }) => {
  console.log(user)
  const [extendNavbar, setExtendNavbar] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  const unauthenticatedOptions = (
    <div>
      <NavbarLink to="/products">Boards</NavbarLink>
      <NavbarLink to="/cart">Cart</NavbarLink>
      <NavbarLink to="/register">Register</NavbarLink>
      <NavbarLink to="/login">Login</NavbarLink>
    </div>
  )
  
  const authenticatedOptions = (
    <div>
      <NavbarLink to="/products">Boards</NavbarLink>
      <NavbarLink to="/cart">Cart</NavbarLink>
      <NavbarLink to="/cart">Profile</NavbarLink>
      <NavbarLink to="/sign-out">Logout</NavbarLink>
    </div>
  )

  const adminOptions = (
    <div>
      <NavbarLink to="/">Customers</NavbarLink>
      <NavbarLink to="/">Products</NavbarLink>
      <NavbarLink to="/">Orders</NavbarLink>
    </div>
  )

  const closeExtendedNav = () => {
    setExtendNavbar(!extendNavbar)
  }

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            { user ? authenticatedOptions : unauthenticatedOptions }

            {/* {() => {
              if (user.isAdmin === 'true') {
                return adminOptions
              } else if (user) {
                return authenticatedOptions
              } else {
                return unauthenticatedOptions
              }
              }
            } */}

            <OpenLinksButton onClick={closeExtendedNav}>
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>

        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">lastWave</NavbarLink>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (<NavbarExtendedContainer>
        <NavbarLinkExtended onClick={closeExtendedNav} to="/">Home</NavbarLinkExtended>
        <NavbarLinkExtended onClick={closeExtendedNav} to="/products">Boards</NavbarLinkExtended>
        <NavbarLinkExtended onClick={closeExtendedNav} to="/cart">Cart</NavbarLinkExtended>
        <NavbarLinkExtended onClick={closeExtendedNav} to="/login">Login</NavbarLinkExtended>
        <NavbarLinkExtended onClick={closeExtendedNav} to="/register">Register</NavbarLinkExtended>
      </NavbarExtendedContainer>)}
    </NavbarContainer>
  )
}

export default Navbar