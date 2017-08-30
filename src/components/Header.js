import React from "react"
import styled from "styled-components"


const Nav = styled.nav`
  width: 100%;
  background-color: hsla(223, 13%, 21%, 1.00);
  display:flex;
  justify-content: space-between;
  align-items: center;
  color: #ececec;
  margin-bottom: 1rem;
  padding: .25rem 1rem;
`

const Logo = styled.h1`
  font-size: 1rem;
  line-height: 1;
`

const SocialLink = styled.a`
  color: hsla(223, 13%, 21%, 1.00);
  text-decoration: none;
  padding: .25rem .5rem;
  background-color: #ececec;
  border-radius: .25rem;
  &:hover, &:focus {
    background-color: hsla(207, 69%, 68%, 1.00);
    color: #ececec;
  }
`

const Header = () => 
  <Nav>
    <Logo>Validator</Logo>
    <SocialLink href="https://github.com/markmichon/validator">Github</SocialLink>
  </Nav>

export default Header