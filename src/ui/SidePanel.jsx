import styled from "styled-components";
import ProfileImage from "./ProfileImage";
import ProfileName from "./ProfileName";
import ProfileInfo from "./ProfileInfo";

import { IoIosMailOpen } from "react-icons/io";
import { IoPhonePortrait } from "react-icons/io5";
import { MdOutlineMyLocation } from "react-icons/md";

const StyledSidePanel = styled.div`
  background-color: var(--color-dark-1);
  color: var(--color-text-light);
  font-family: "Roboto", sans-serif;
  border-radius: 8px;
  margin: 0 5px;

  display: flex;
  flex-direction: column;
  height: calc(100vh - 6rem);
`;

function SidePanel() {
  return (
    <StyledSidePanel>
      <ProfileImage />
      <ProfileName />
      <ProfileInfo>
        <IoIosMailOpen size={30} />
        <div>
          <h3>Email</h3>
          <h2>email6969@example.com</h2>
        </div>
      </ProfileInfo>
      <ProfileInfo>
        <IoPhonePortrait size={30} />
        <div>
          <h3>Phone</h3>
          <h2>+63 6969696969</h2>
        </div>
      </ProfileInfo>
      <ProfileInfo>
        <MdOutlineMyLocation size={30} />
        <div>
          <h3>Location</h3>
          <h2>Philippines</h2>
        </div>
      </ProfileInfo>
    </StyledSidePanel>
  );
}

export default SidePanel;
