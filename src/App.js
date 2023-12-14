import GlobalStyle from "./theme/globalStyle";
import Game from "./components/Game/Game";
import { GameProvider } from "./Context/GameContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <GameProvider>
        <Game />
      </GameProvider>
    </>
  );
}

export default App;
