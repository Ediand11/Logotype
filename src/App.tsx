import styled from "styled-components";
import { PostPage } from "./pages/PostPage";

function App() {
  return (
    <Root>
      <div id="modal"></div>
      <PostPage />
    </Root>
  );
}

export default App;

const Root = styled.div`
  background-color: #fff;
`;
