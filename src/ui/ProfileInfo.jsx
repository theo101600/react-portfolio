import styled from "styled-components";

const StyledProfileInfo = styled.div`
  display: flex;
  align-items: center; /* vertically centers content */
  gap: 1rem; /* adds space between the image and text */

  margin: 5px 20px;
  background-color: var(--color-dark-2);
  border-radius: 5px;
  padding: 1.2rem;
  font-size: 1rem;

  h3 {
    margin-left: 1rem;
    text-transform: uppercase;
    font-weight: 100;
    letter-spacing: 0.5rem;
  }
  h2 {
    margin-left: 1rem;
    font-weight: 400;
  }
`;

function ProfileInfo({ children }) {
  return <StyledProfileInfo>{children}</StyledProfileInfo>;
}

export default ProfileInfo;
