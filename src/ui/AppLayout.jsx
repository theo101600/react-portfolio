import styled from "styled-components";
import SidePanel from "./SidePanel";
import MainPanel from "./MainPanel";

const StyledAppLayout = styled.div`
  background-color: var(--color-dark-0);
  height: 100vh;
  padding: 2.4rem;
  display: grid;
  grid-template-columns: 20% 80%;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <SidePanel />
      <MainPanel />
    </StyledAppLayout>
  );
}

export default AppLayout;
