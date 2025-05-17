import styled from "styled-components";

const StyledProfileImg = styled.img`
  margin: 20px 20px;
  width: 50%;
  align-self: center;
`;

function ProfileImage() {
  return <StyledProfileImg src="/ProfileIcon.jpg" alt="profile picture" />;
}

export default ProfileImage;
