import styled from "styled-components";
import { Header } from "./components/Header";

function App() {
  return (
    <Root>
      <Header />
    </Root>
  );
}

export default App;

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;
