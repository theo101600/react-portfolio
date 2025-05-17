import styled from "styled-components";

const StyledLogo = styled.div`
  margin-left: 20rem;
  text-align: center;
`;
const Img = styled.img`
  height: 5rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/letter-t-logo.svg" />
    </StyledLogo>
  );
}

export default Logo;
