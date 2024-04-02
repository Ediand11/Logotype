import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import { store } from "./store";

const GlobalStyle = createGlobalStyle`* {
font-family: 'Roboto', sans-serif;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a{
  color: inherit;
  text-decoration: none;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);
