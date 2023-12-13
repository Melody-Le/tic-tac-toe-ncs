import { render, screen } from "../../test-utils/testing-library-utils";
import { GameContext } from "../../Context/GameContext";

import { GameState } from "../../utils/constant";

import GameOver from "./GameOver";

describe("Game Over Flow", () => {
  test("display when game over with Draw", () => {
    const providerPropsGameDraw = {
      gameState: GameState.draw,
    };
    render(
      <GameContext.Provider value={providerPropsGameDraw}>
        <GameOver />
      </GameContext.Provider>,
      {
        providerPropsGameDraw,
      }
    );
    const gameOverContainer = screen.queryByTestId("gameOver");
    expect(gameOverContainer).toHaveTextContent("DRAW");
  });

  test("display when game over with Player X Win", () => {
    const providerPropsGameDraw = {
      gameState: GameState.playerXWins,
    };
    render(
      <GameContext.Provider value={providerPropsGameDraw}>
        <GameOver />
      </GameContext.Provider>,
      {
        providerPropsGameDraw,
      }
    );
    const gameOverContainer = screen.queryByTestId("gameOver");
    expect(gameOverContainer).toHaveTextContent("X WINS");
  });

  test("display when game over with Player O Win", () => {
    const providerPropsGameDraw = {
      gameState: GameState.playerOWins,
    };
    render(
      <GameContext.Provider value={providerPropsGameDraw}>
        <GameOver />
      </GameContext.Provider>,
      {
        providerPropsGameDraw,
      }
    );
    const gameOverContainer = screen.queryByTestId("gameOver");
    expect(gameOverContainer).toHaveTextContent("O WINS");
  });

  test("when Game in progress, Game Over will not be show", () => {
    const providerPropsGameDraw = {
      gameState: GameState.inProgress,
    };
    render(
      <GameContext.Provider value={providerPropsGameDraw}>
        <GameOver />
      </GameContext.Provider>,
      {
        providerPropsGameDraw,
      }
    );
    const gameOverContainer = screen.queryByTestId("gameOver");
    expect(gameOverContainer).toBe(null);
  });
});
