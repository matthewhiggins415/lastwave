import React, { useState, useEffect } from 'react'
import { NavbarContainer, LeftContainer, RightContainer, NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer, NavbarLink, OpenLinksButton, NavbarLinkExtended } from '../styles/Navbar.style'
// import Logo component from styles
// import LogoImage from '../assets/logo.png - pass this to Logo as src

const Navbar = ({ user }) => {
  console.log(user)
  const [extendNavbar, setExtendNavbar] = useState(false)

  const closeExtendedNav = () => {
    setExtendNavbar(!extendNavbar)
  }

  const renderNav = () => {
    if (user && user.isAdmin) {
      return (
        <div>
        <NavbarLink to="/admin/customers">Customers</NavbarLink>
        <NavbarLink to="/admin/products">Products</NavbarLink>
        <NavbarLink to="/admin/orders">Orders</NavbarLink>
        <NavbarLink to="/sign-out">Logout</NavbarLink>
      </div>)
    } else if (user) {
      return (
      <div>
        <NavbarLink to="/products">Boards</NavbarLink>
        <NavbarLink to="/cart">Cart</NavbarLink>
        <NavbarLink to="/profile">Profile</NavbarLink>
        <NavbarLink to="/sign-out">Logout</NavbarLink>
      </div>)
    } else {
      return (
      <div>
        <NavbarLink to="/products">Boards</NavbarLink>
        <NavbarLink to="/cart">Cart</NavbarLink>
        <NavbarLink to="/register">Register</NavbarLink>
        <NavbarLink to="/login">Login</NavbarLink>
      </div>)
    }
  }

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            {renderNav()}
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