import styled from "styled-components";
import HomeNav from "./HomeNav";
import Logo from "./Logo";

const StyledHeader = styled.header`
  background-color: var(--color-dark-0);
  color: var(--color-text-light);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 5;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <HomeNav />
    </StyledHeader>
  );
}

export default Header;
