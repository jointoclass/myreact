import { createGlobalStyle } from "styled-components";
import MovieListMain from "./Components/MovieList/MovieListMain";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <MovieListMain />
    </div>
  );
}

export default App;
