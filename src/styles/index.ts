import styled from "styled-components";

export const Image = styled.img<{ $widthForMobile?: string }>`
  @media (max-width: 768px) {
    height: auto;
    width: ${({ $widthForMobile }) => ($widthForMobile ? $widthForMobile : "auto")};
  }
`;

export const CleanButton = styled.button`
  cursor: pointer;

  margin: 0;
  padding: 0;
  border: none;
  background: none;
`;
