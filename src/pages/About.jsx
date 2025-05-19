import styled from "styled-components";
import SkillCard from "../ui/SkillCard";
import WebDevIcon from "../assets/icons/WebDevIcon";
import ThreeDPrinting from "../assets/icons/ThreeDPrinting";
import ElectronicsIcon from "../assets/icons/ElectronicsIcon";
import WebDesignIcon from "../assets/icons/WebDesignIcon";
import ThreeDModeling from "../assets/icons/ThreeDModeling";

const StyledAbout = styled.div`
  padding: 3rem 5rem;
  height: 100%;
  overflow: scroll;
  p {
    font-family: "Roboto", sans-serif;
    font-weight: 200;
    font-size: 18px;
  }
  h1 {
    margin-top: 2rem;
    font-family: "Ubuntu", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 30px;
  }
`;
const StyledSkillContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 0;
`;

function About() {
  return (
    <StyledAbout>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolorum
        iusto harum, porro eos facilis dolore culpa. Similique soluta odit cum,
        aliquam libero quaerat magnam voluptatibus recusandae alias, quidem
        consectetur? Totam nihil quaerat iusto aliquid deserunt repellendus
        fugit harum dolor provident architecto accusamus, perferendis
        perspiciatis! Corrupti inventore dicta vitae pariatur perspiciatis nam
        ipsam, magni nobis ut molestias ipsum alias. Ab? Natus nulla fugiat
        porro iure hic ipsam possimus ea eaque soluta laboriosam, nesciunt
        officiis necessitatibus eum nihil omnis odio nisi corporis numquam
        quisquam corrupti distinctio delectus. Consequuntur ipsam cupiditate
        deserunt? Quam vitae reprehenderit dicta hic, eaque deserunt! Totam,
        quae. Aspernatur enim, accusamus autem provident minima omnis maiores
        qui error impedit, nesciunt, porro quas nostrum rerum atque illum quam
        at corporis.
      </p>
      <h1>What I'm Doing</h1>
      <StyledSkillContainer>
        <SkillCard>
          <WebDevIcon />
          <div>
            <h2>Web Development</h2>
            <span>
              HTML, CSS and JavaScript. Focusing on React and MERN stack
            </span>
          </div>
        </SkillCard>

        <SkillCard>
          <WebDesignIcon />
          <div>
            <h2>Web Design</h2>
            <span>Figma and photoshop to plan and design web apps.</span>
          </div>
        </SkillCard>

        <SkillCard>
          <ThreeDModeling />
          <div>
            <h2>3D Modeling</h2>
            <span>
              SOLIDWORKS to model and design a variety of hardware parts.
            </span>
          </div>
        </SkillCard>

        <SkillCard>
          <ThreeDPrinting />
          <div>
            <h2>3d Printing</h2>
            <span>Experience with using 3d printer, Ulitimaker S5.</span>
          </div>
        </SkillCard>

        <SkillCard>
          <ElectronicsIcon />
          <div>
            <h2>Circuit Design</h2>
            <span>
              KiCAD for designing and generating gerber files for fabrication of
              boards
            </span>
          </div>
        </SkillCard>
      </StyledSkillContainer>
    </StyledAbout>
  );
}

export default About;
