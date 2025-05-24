import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledProfileImg = styled.img`
  margin: 20px 20px;
  width: 50%;
  align-self: center;
  cursor: pointer;
`;

function ProfileImage() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/home");
  }

  return (
    <StyledProfileImg
      src="/ProfileIcon.png"
      alt="profile picture"
      onClick={() => handleClick()}
    />
  );
}

export default ProfileImage;
