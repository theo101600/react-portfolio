import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import styled from "styled-components";
import Header from "../ui/Header";
import Button from "../ui/Button";

const StyledHomepage = styled.div`
  height: 100vh;
  background-color: var(--color-dark-1);
  color: var(--color-text-light);
`;
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  margin: 5rem;
  width: 600px;
`;
const StyledH1 = styled.h1`
  font-family: "Ubuntu Mono", monospace;
  font-weight: 400;
  font-style: normal;
  font-size: 96px;
  line-height: 10rem;
`;
const StyledH2 = styled.h2`
  font-family: "Ubuntu Mono", monospace;
  font-weight: 400;
  font-style: normal;
  font-size: 78px;
  line-height: 10rem;
`;
const StyledContainer2 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;
const StyledSocials = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  color: var(--color-text-light);
  gap: 2rem;
`;

function Homepage() {
  return (
    <StyledHomepage>
      <Header />
      <StyledContainer>
        <div>
          <StyledH1>
            Hi, <br />
            I'm Theo
          </StyledH1>
          <StyledH2>React Developer</StyledH2>
          <StyledContainer2>
            <Button variation="primary" size="large">
              Contact
            </Button>
          </StyledContainer2>
        </div>
        <Img src="/profile-image.jpg"></Img>
      </StyledContainer>
      <StyledSocials>
        <AiFillGithub size={50} />
        <AiFillLinkedin size={50} />
      </StyledSocials>
    </StyledHomepage>
  );
}

export default Homepage;
