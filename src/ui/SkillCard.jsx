import styled from "styled-components";

const StyledSkillCard = styled.div`
  display: flex;
  width: 48%;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-dark-2);
  border-radius: 8px;
  margin: 1rem 0;
  padding: 2rem;
  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 300;
    text-transform: uppercase;
    margin: 0;
  }
  span {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 100;
    margin: 0;
  }
  img {
    height: 100px;
  }
`;

function SkillCard({ children }) {
  return <StyledSkillCard>{children}</StyledSkillCard>;
}

export default SkillCard;
