import { FC, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { CleanButton, Image } from "../../../styles";
import Burger from "../../../svg/Burger.svg";
import Logo from "../../../svg/logo.svg";
import Search from "../../../svg/search.svg";
import { MobileMenu } from "./MobileMenu";

const LogoBar: FC = () => {
  const [mobileMenuIsShow, setMobileMenuIsShow] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuIsShow((p) => !p);
  };

  return (
    <Root>
      <CleanButtonHideOnDesktop onClick={toggleMobileMenu}>
        <Image src={Burger} alt="Burger" $widthForMobile="25px" />
      </CleanButtonHideOnDesktop>

      <Image $widthForMobile="163px" src={Logo} alt="logo" />

      <CleanButton>
        <Image src={Search} alt="Search" $widthForMobile="16px" />
      </CleanButton>

      {mobileMenuIsShow &&
        createPortal(
          <MobileMenu isVisibility={mobileMenuIsShow} setVisibility={setMobileMenuIsShow} />,
          document.getElementById("modal") || document.body
        )}
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
