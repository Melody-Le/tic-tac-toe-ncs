import Board from "./components/Board";
import GlobalStyle from "./theme/globalStyle";
function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">TIC TACT OE GAME</div>
      <Board />
    </>
  );
}

export default App;
