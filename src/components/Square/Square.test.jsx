import {
  render,
  screen,
  fireEvent,
} from "../../test-utils/testing-library-utils";
import { GameState, PLAYER_X, PLAYER_O } from "../../utils/constant";
import { GameContext } from "../../Context/GameContext";
import { theme } from "../../theme/theme";

import Square from "./Square";

describe("Square flow ", () => {
  let providerProps;
  beforeEach(
    () =>
      (providerProps = {
        player: PLAYER_O,
        gameState: GameState.inProgress,
        handleSquareClick: jest.fn((index) => {
          const { player, gameState, currentSquares } = providerProps;
          let nextSquare = [...currentSquares];
          if (nextSquare[index] || gameState !== GameState.inProgress) return;
          nextSquare[index] = player === PLAYER_X ? "X" : "O";
          providerProps.currentSquares = nextSquare;
        }),
        currentSquares: ["X", null, null, null, null, null, null, null, null],
      })
  );

  test("onClick when game still in progress", () => {
    const { rerender } = render(<Square squareIndex={1} />, { providerProps });
    const cell1 = screen.getByTestId(`cell-1`);

    expect(cell1).not.toHaveTextContent();
    expect(cell1).not.toBeDisabled();

    fireEvent.click(cell1);

    expect(providerProps.handleSquareClick).toHaveBeenCalledTimes(1);

    rerender(
      <GameContext.Provider value={providerProps}>
        <Square squareIndex={1} />
      </GameContext.Provider>
    );

    expect(cell1).toHaveTextContent("O");
    expect(cell1).toBeDisabled();
  });

  test("display when game over", () => {
    const providerPropsGameOver = {
      gameState: GameState.playerXWins,
      currentSquares: ["X", "X", "X", "O", "O", null, null, null, null],
      winningLine: [0, 1, 2],
    };
    render(
      <GameContext.Provider value={providerPropsGameOver}>
        <Square squareIndex={1} />
      </GameContext.Provider>,
      {
        providerPropsGameOver,
      }
    );
    const cell1 = screen.getByTestId(`cell-1`);
    expect(cell1).toHaveStyle(`background-color: ${theme.highlight}`);
    expect(cell1).toBeDisabled();
  });
});
