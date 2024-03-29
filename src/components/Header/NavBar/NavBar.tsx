import { useState } from "react";
import styled from "styled-components";
import { CleanButton, Image } from "../../../styles";
import Arrow from "../../../svg/chevron-down.svg";

const NavBar = () => {
  const dropdownData = [
    {
      label: "Demos",
      options: [
        { name: "Option 1", link: "#" },
        { name: "Option 2", link: "#" },
        { name: "Option 3", link: "#" },
      ],
    },
    {
      label: "Post",
      options: [
        { name: "Post Header", link: "#" },
        { name: "Post Layout", link: "#" },
        { name: "Share Buttons", link: "#" },
        { name: "Gallery Post", link: "#" },
        { name: "Video Post", link: "#" },
      ],
    },
    {
      label: "Features",
      options: [
        { name: "Option 1", link: "#" },
        { name: "Option 2", link: "#" },
        { name: "Option 3", link: "#" },
      ],
    },
    {
      label: "Categories",
      options: [
        { name: "Option 1", link: "#" },
        { name: "Option 2", link: "#" },
        { name: "Option 3", link: "#" },
      ],
    },
    {
      label: "Shop",
      options: [
        { name: "Option 1", link: "#" },
        { name: "Option 2", link: "#" },
        { name: "Option 3", link: "#" },
      ],
    },
  ];

  const [dropdownStates, setDropdownStates] = useState<boolean[]>(dropdownData.map(() => false));

  const toggleDropdown = (index: number) => {
    const newDropdownStates = dropdownStates.map((state, i) => i === index);

    // Устанавливаем новое состояние
    setDropdownStates(newDropdownStates);
  };

  const closeAllDropdown = () => {
    setDropdownStates(dropdownStates.map(() => false));
  };

  return (
    <Root>
      {dropdownData.map((dropdown, index) => (
        <Dropdown key={index} onMouseLeave={() => closeAllDropdown()}>
          <DropdownButton onMouseEnter={() => toggleDropdown(index)}>
            {dropdown.label}
            <Image src={Arrow} alt="Arrow" />
          </DropdownButton>
          {dropdownStates[index] && (
            <DropdownContent>
              {dropdown.options.map((option, i) => (
                <LinkArrow key={i} href={option.link}>
                  {option.name}
                  <RotateArrow src={Arrow} alt="RotateArrow" />
                </LinkArrow>
              ))}
            </DropdownContent>
          )}
        </Dropdown>
      ))}
      <LinkBuyNow href="#">Buy Now</LinkBuyNow>
    </Root>
  );
};

export default NavBar;

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e9e9e9;
  border-left: none;
  border-right: none;
  width: 100vw;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LinkBuyNow = styled.a`
  padding: 21.5px 16px;

  font-size: 16px;
  font-weight: 500;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled(CleanButton)`
  font-size: 16px;
  font-weight: 500;

  display: flex;
  gap: 4px;
  padding: 21.5px 16px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropdownContent = styled.div`
  position: absolute;
  font-weight: 400;
  width: 176px;
  display: flex;
  flex-direction: column;
  padding: 20px;

  border: 1px solid #e9e9e9;
  background: #fff;
  z-index: 1;
`;

const LinkArrow = styled.a`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e9e9e9;
  padding: 8px 0;

  font-weight: 400;
  font-size: 13px;

  &:first-child {
    border: none;
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:hover {
    color: #969696;
    padding-left: 8px;
  }
`;

const RotateArrow = styled(Image)`
  transform: rotate(-90deg);
`;
