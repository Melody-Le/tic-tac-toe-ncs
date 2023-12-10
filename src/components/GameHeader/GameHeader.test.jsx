import {
  render,
  screen,
  fireEvent,
} from "../../test-utils/testing-library-utils";
import { GameState, PLAYER_X, PLAYER_O } from "../../utils/constant";
import { GameContext } from "../../Context/GameContext";

import GameHeader from "./GameHeader";

describe("GameHeader Flow", () => {
  let providerProps;
  beforeEach(
    () =>
      (providerProps = {
        player: PLAYER_O,
        gameState: GameState.inProgress,
        handleRestart: jest.fn(() => {
          providerProps.player = PLAYER_X;
          providerProps.currentStep = 0;
        }),
        currentStep: 2,
      })
  );

  test("when game in progress, then click restart button", () => {
    const { rerender } = render(<GameHeader />, { providerProps });
    const restartBtn = screen.getByRole("button", { name: /restart/i });
    const playerTurnAndStep = screen.getByTestId("playerTurnAndStep");

    expect(restartBtn).toBeInTheDocument();
    expect(playerTurnAndStep).toBeInTheDocument();

    expect(playerTurnAndStep).toHaveTextContent(`STEP 3 : O TURN`);

    fireEvent.click(restartBtn);

    expect(providerProps.handleRestart).toHaveBeenCalledTimes(1);

    rerender(
      <GameContext.Provider value={providerProps}>
        <GameHeader />
      </GameContext.Provider>
    );

    expect(playerTurnAndStep).toHaveTextContent(`STEP 1 : X TURN`);
  });

  test("when game over, only show restart button in game", () => {
    const providerPropsGameOver = {
      gameState: GameState.playerXWins,
    };
    render(
      <GameContext.Provider value={providerPropsGameOver}>
        <GameHeader />
      </GameContext.Provider>,
      {
        providerPropsGameOver,
      }
    );
    const restartBtn = screen.getByRole("button", { name: /restart/i });

    expect(restartBtn).toBeInTheDocument();
    expect(screen.queryByTestId("playerTurnAndStep")).toBe(null);
  });
});
