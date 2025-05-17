import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import AppNav from "./AppNav";
import { useState, useEffect } from "react";

const StyledMainPanel = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-dark-1);
  color: var(--color-text-light);
  border-radius: 8px;
  margin: 0 5px;

  height: calc(100vh - 6rem);
`;
const StyledAppHeader = styled.header`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin: 1.5rem auto;
    font-family: "Ubuntu", sans-serif;
    font-weight: 500;
    font-style: normal;
  }
`;

function MainPanel() {
  const location = useLocation();
  const [currentURL, setCurrentURL] = useState(
    location.pathname.split("/").pop()
  );

  useEffect(() => {
    setCurrentURL(location.pathname.split("/").pop());
  }, [location, setCurrentURL]);

  return (
    <StyledMainPanel>
      <StyledAppHeader>
        <h1>{currentURL.charAt(0).toUpperCase() + currentURL.slice(1)}</h1>
        <AppNav />
      </StyledAppHeader>
      <Outlet />
    </StyledMainPanel>
  );
}

export default MainPanel;
