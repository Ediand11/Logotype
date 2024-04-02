import { FC } from "react";
import styled, { keyframes } from "styled-components";
import { CleanButton, Image } from "../../../../styles";
import Arrow from "../../../../svg/chevron-down.svg";
import Close from "../../../../svg/Close.svg";
import Logo from "../../../../svg/logo.svg";

interface IMenuProps {
  isVisibility: boolean;
  setVisibility: (isVisibility: boolean) => void;
}

const MobileMenu: FC<IMenuProps> = ({ isVisibility, setVisibility }) => {
  const links = [
    {
      label: "Demos",
      link: "#",
    },
    {
      label: "Post",
      link: "#",
    },
    {
      label: "Features",
      link: "#",
    },
    {
      label: "Categories",
      link: "#",
    },
    {
      label: "Shop",
      link: "#",
    },
  ];

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  };

  return (
    <Root $isVisibility={isVisibility} onClick={() => setVisibility(false)}>
      <Wrap onClick={handleOverlayClick}>
        <TopMenu>
          <Image src={Logo} $widthForMobile="161px" alt="Logo" />

          <CleanButton onClick={() => setVisibility(false)}>
            <Image src={Close} $widthForMobile="18px" alt="Close" />
          </CleanButton>
        </TopMenu>

        <Menu>
          {links.map((data, index) => (
            <MenuLink key={index} href={data.link}>
              {data.label} <Image src={Arrow} alt="Arrow" />
            </MenuLink>
          ))}
          <MenuLink href="#">Buy Now</MenuLink>
        </Menu>
      </Wrap>
    </Root>
  );
};

export default MobileMenu;

const slideInAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`;

const Root = styled.div<{ $isVisibility: boolean }>`
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  animation: ${({ $isVisibility }) => ($isVisibility ? slideInAnimation : "none")} 0.3s ease; /* Use slideInAnimation or slideOutAnimation based on visibility */
`;

const Wrap = styled.div`
  width: 85vw;
  height: 100%;

  background: #fff;
  display: flex;
  flex-direction: column;
`;

const TopMenu = styled.div`
  border-bottom: 1px solid #e9e9e9;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  width: 100%;
`;

const Menu = styled.div`
  padding: 14px 20px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
`;

const MenuLink = styled.a`
  width: 100%;

  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e9e9e9;
  padding: 16px 0;

  font-weight: 500;
  font-size: 16px;

  &:first-child {
    border: none;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;
