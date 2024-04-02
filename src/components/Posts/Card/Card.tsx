import { FC } from "react";
import styled from "styled-components";
import Oval from "../../../svg/Oval.svg";
import { IPost } from "../../../types";

const Card: FC<{ data: IPost }> = ({ data }) => {
  return (
    <Root>
      <picture>
        <source media="(max-width:480px)" srcSet={data.img} />
        <ImagePict src={data.img_2x} alt={data.autor} />
      </picture>
      <CardTag>{data.tags}</CardTag>
      <CardTitle>{data.title}</CardTitle>
      <CardMeta>
        <CardMetaSpan>{data.autor}</CardMetaSpan>
        <img width="3px" height="3px" src={Oval} alt="dot" />
        {data.date}
        <img width="3px" height="3px" src={Oval} alt="dot" />
        {data.views}
      </CardMeta>
      <CardText>{data.text}</CardText>
    </Root>
  );
};

export default Card;

const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

const ImagePict = styled.img`
  width: 360px;
  height: 230px;

  @media (max-width: 481px) {
    width: 335px;
    height: 230px;
  }
`;

const CardTag = styled.h3`
  color: #eb0028;
  width: 100%;

  font-size: 13px;
  font-weight: 700;
  text-align: start;
`;

const CardTitle = styled.h2`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px; /* 125% */
`;

const CardMeta = styled.p`
  color: #9b9b9b;
  font-size: 12px;
  font-weight: 400;

  display: flex;
  align-items: center;
  text-align: start;
  gap: 5px;
`;

const CardMetaSpan = styled.span`
  color: #000;
  font-weight: 500;
`;

const CardText = styled.p`
  color: #929292;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;
