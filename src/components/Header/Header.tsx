import { FC } from "react";
import styled from "styled-components";
import { LogoBar } from "./LogoBar";
import { NavBar } from "./NavBar";

const Header: FC = () => {
  return (
    <Root>
      <LogoBar />
      <NavBar />
    </Root>
  );
};

export default Header;

const Root = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff;
  position: sticky;
  z-index: 2;
  top: 0;
`;
