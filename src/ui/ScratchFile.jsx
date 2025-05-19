import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Squares from "../ui/Squares";
import styled from "styled-components";
import Header from "../ui/Header";
import Button from "../ui/Button";

const StyledMainContainer = styled.div`
  position: relative;
`;

const SquaresBackground = styled.div`
  position: absolute;
  z-index: 0; // behind everything
  background-color: var(--color-dark-1);
`;

const StyledHomepage = styled.div`
  color: var(--color-text-light);
  position: relative;
  z-index: 10;
`;
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Ubuntu Mono", monospace;
    font-weight: 400;
    font-style: normal;
    font-size: 96px;
    line-height: 10rem;
  }
  h2 {
    font-family: "Ubuntu Mono", monospace;
    font-weight: 400;
    font-style: normal;
    font-size: 78px;
    line-height: 10rem;
  }
`;
const Img = styled.img`
  margin: 5rem;
  width: 600px;
  pointer-events: none;
`;

const StyledButtonContainer = styled.div`
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
    <StyledMainContainer>
      <SquaresBackground>
        <Squares
          speed={0.5}
          squareSize={40}
          direction="down" // up, down, left, right, diagonal
          borderColor="var(--color-dark-2)"
          hoverFillColor="#669BBC"
        />
      </SquaresBackground>
      <StyledHomepage>
        <Header />
        <StyledContainer>
          <div>
            <h1>
              Hi, <br />
              I'm Theo
            </h1>
            <h2>React Developer</h2>
            <StyledButtonContainer>
              <Button variation="primary" size="large">
                Contact
              </Button>
            </StyledButtonContainer>
          </div>
          <Img src="/profile-image.jpg"></Img>
        </StyledContainer>
        <StyledSocials>
          <AiFillGithub size={50} />
          <AiFillLinkedin size={50} />
        </StyledSocials>
      </StyledHomepage>
    </StyledMainContainer>
  );
}

export default Homepage;
