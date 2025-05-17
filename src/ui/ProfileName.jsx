import styled from "styled-components";

const StyledProfileName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  margin: 2rem 0;

  h1 {
    font-size: 3.2rem;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: 200;
    padding: 0 1.5rem;
    background-color: var(--color-dark-2);
    border-radius: 8px;
  }
  hr {
    width: 75%;
    margin: 1rem auto;
    border: 1px solid var(--color-text-light);
  }
`;

function ProfileName() {
  return (
    <StyledProfileName>
      <h1>Name Surname</h1>
      <h2>Web Developer</h2>
      <hr />
    </StyledProfileName>
  );
}

export default ProfileName;
