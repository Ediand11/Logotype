import styled from "styled-components";
import { CleanButton, Image } from "../../../styles";
import Burger from "../../../svg/Burger.svg";
import Logo from "../../../svg/logo.svg";
import Search from "../../../svg/search.svg";

const LogoBar = () => {
  return (
    <Root>
      <CleanButtonHideOnDesktop>
        <Image src={Burger} alt="Burger" $widthForMobile="25px" />
      </CleanButtonHideOnDesktop>

      <Image $widthForMobile="163px" src={Logo} alt="logo" />

      <CleanButton>
        <Image src={Search} alt="Search" $widthForMobile="16px" />
      </CleanButton>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0;
  width: 100vw;
`;

const CleanButtonHideOnDesktop = styled(CleanButton)`
  @media (min-width: 768px) {
    visibility: hidden;
  }
`;

export default LogoBar;
