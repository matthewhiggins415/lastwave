import React from 'react'
import { Container, LinkContainer, FooterLink } from '../styles/Footer.styles'

const Footer = () => {
  return (
    <Container>
      <LinkContainer>
        <FooterLink to="/contact">Contact</FooterLink>
        <FooterLink to="/about">About</FooterLink> 
      </LinkContainer>
    </Container>
  )
}

export default Footer