import styled from "styled-components";
import { useGetPostsQuery } from "../../store/posts";
import { Card } from "./Card";

const Posts = () => {
  const { data } = useGetPostsQuery();

  return <Grid>{data && data.map((article) => <Card data={article} />)}</Grid>;
};

export default Posts;

const Grid = styled.div`
  width: 100%;
  display: grid;
  align-items: start;
  justify-content: center;
  margin-top: 48px;

  grid-template-columns: repeat(3, 360px);
  grid-column-gap: 40px;
  gap: 48px;

  @media (max-width: 1024px) {
    padding: 0 20px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    margin-top: 0;

    grid-template-columns: repeat(1, 335px);
    gap: 32px;
  }
`;
