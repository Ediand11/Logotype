import styled from "styled-components";
import { LogoBar } from "./LogoBar";
import { NavBar } from "./NavBar";

const Header = () => {
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
