import styled from "styled-components";

const StyledLogo = styled.div`
  margin-left: 20rem;
  text-align: center;
`;
const Img = styled.img`
  height: 7rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/Logo.png" />
    </StyledLogo>
  );
}

export default Logo;
