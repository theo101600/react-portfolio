import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  background-color: var(--color-dark-2);
  border-radius: 8px;
`;
const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  margin-left: 2rem;
  margin-right: 35rem;
  font-weight: 100;
`;
const StyledSpan = styled.span`
  text-transform: uppercase;
`;
const StyledNavLink = styled(NavLink)`
  padding: 10% 4rem;
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-primary);
    font-weight: 300;
    box-shadow: 0 -4px 0px var(--color-primary) inset;
    transition: all 0.3s;
  }
  &:active {
    color: var(--color-text-light);
    font-weight: 300;
    box-shadow: 0 -4px 0px var(--color-text-light) inset;
    transition: all 0.3s;
  }
`;

function AppNav() {
  return (
    <StyledNav>
      <NavList>
        <li>
          <StyledNavLink to="/about">
            <StyledSpan>About</StyledSpan>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/resume">
            <StyledSpan>Resume</StyledSpan>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/portfolio">
            <StyledSpan>Portfolio</StyledSpan>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/contact">
            <StyledSpan>Contact</StyledSpan>
          </StyledNavLink>
        </li>
      </NavList>
    </StyledNav>
  );
}

export default AppNav;
