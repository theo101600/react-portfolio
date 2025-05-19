import styled from "styled-components";

const StyledSkillCard = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-dark-2);
  border-radius: 8px;
  margin: 1rem 1rem;
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
  svg {
    fill: var(--color-text-light);
    margin: 0 3rem;
  }
  div {
    margin: 2rem 2rem;
  }
`;

function SkillCard({ children }) {
  return <StyledSkillCard>{children}</StyledSkillCard>;
}

export default SkillCard;
