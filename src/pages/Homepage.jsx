import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
// import Aurora from "../ui/Aurora";
import Squares from "../ui/Squares";
import styled from "styled-components";
import Header from "../ui/Header";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const StyledHomepage = styled(motion.div)`
  position: relative;
`;

const StyledBackground = styled.div`
  background-color: var(--color-dark-1);
  height: 100vh;
  width: 100vw;
  position: absolute;
`;

const StyledHomepageContent = styled.div``;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text-light);
  h1 {
    font-family: "Ubuntu Mono", monospace;
    font-weight: 400;
    font-style: normal;
    font-size: 96px;
    line-height: 10rem;
    position: relative;
    z-index: 5;
    pointer-events: none;
  }
  h2 {
    font-family: "Ubuntu Mono", monospace;
    font-weight: 400;
    font-style: normal;
    font-size: 78px;
    line-height: 10rem;
    position: relative;
    z-index: 5;
    pointer-events: none;
  }
`;
const Img = styled.img`
  margin: 5rem;
  width: 600px;
  pointer-events: none;
  position: relative;
  z-index: 5;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  position: relative;
  z-index: 5;
`;
const StyledSocials = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  color: var(--color-text-light);
  gap: 2rem;
  svg {
    position: relative;
    z-index: 5;
  }
`;

function Homepage() {
  return (
    <StyledHomepage
    // initial={{ y: "50%" }}
    // animate={{ y: "0" }}
    // exit={{ y: "" }}
    >
      <StyledBackground>
        <Squares
          speed={0.4}
          squareSize={40}
          direction="down" // up, down, left, right, diagonal
          borderColor="#000"
          hoverFillColor="#669BBC"
        />
        {/* <Aurora
          colorStops={["#C1121F", "#669BBC", "#003049", "#780000"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        /> */}
      </StyledBackground>

      <StyledHomepageContent>
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
      </StyledHomepageContent>
    </StyledHomepage>
  );
}

export default Homepage;
