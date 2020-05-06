import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import logoImg from '../images/logo.png';
import Container from '../shared/Container';

const Header = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.purpleTransparent};
  z-index: 999;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & ul {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.purpleSolid};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1400;
    opacity: ${(props) => (props.open && 1) || 0};
    transform: ${(props) => (props.open && `scale(1)`) || `scale(0)`};
    transition: opacity 0.5s;
  }
`;
const Logo = styled.a`
  & img {
    max-width: 80%;
  }
`;
const HamburgerMenu = styled.div`
  font-size: 2.6rem;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 1500;

  & .fa-times {
    display: ${(props) => (props.open ? 'block' : 'none')};
  }
  & .fa-bars {
    display: ${(props) => (props.open ? 'none' : 'block')};
  }
`;
const NavItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
const NavLink = styled.a`
  display: block;
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 1rem;
`;
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Header>
      <Container>
        <Nav open={open}>
          <Logo href="index.html">
            <img src={logoImg} alt="" />
          </Logo>
          <HamburgerMenu onClick={() => setOpen(!open)} open={open}>
            <FontAwesomeIcon icon={faBars} />
            <FontAwesomeIcon icon={faTimes} />
          </HamburgerMenu>
          <ul>
            <NavItem>
              <NavLink>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Offers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>News</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Contact</NavLink>
            </NavItem>
          </ul>
        </Nav>
      </Container>
    </Header>
  );
};

export default Navbar;
