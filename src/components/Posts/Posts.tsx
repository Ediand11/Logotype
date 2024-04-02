import styled from "styled-components";
import { Card } from "./Card";

const Posts = () => {
  const articles = [
    {
      title: "Eat Right For Your Exercise Regime",
      text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
      tags: "Lifestyle",
      autor: "Nick Bove",
      img: "https://cloud.codesupply.co/endpoint/react/images/post-img-1.jpg",
      img_2x: "https://cloud.codesupply.co/endpoint/react/images/post-img-1@2x.jpg",
      date: "April 8, 2018",
      views: "3K",
    },
  ];

  return (
    <Grid>
      {articles.map((article) => (
        <Card data={article} />
      ))}
    </Grid>
  );
};

export default Posts;

const Grid = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;

  margin-top: 48px;

  grid-template-columns: repeat(3, 360px);
  grid-column-gap: 40px;

  @media (max-width: 768px) {
    margin-top: 0;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 335px);
    gap: 32px;
  }
`;
