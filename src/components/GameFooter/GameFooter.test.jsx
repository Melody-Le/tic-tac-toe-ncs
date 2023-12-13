import {
  render,
  screen,
  fireEvent,
} from "../../test-utils/testing-library-utils";
import { GameContext } from "../../Context/GameContext";
import GameFooter from "./GameFooter";
import { GameState } from "../../utils/constant";
import { act } from "react-dom/test-utils";

describe("GameFooter flow", () => {
  let providerProps;
  beforeEach(
    () =>
      (providerProps = {
        gameState: GameState.inProgress,
        currentStep: 3,

        handleBackAStep: jest.fn(() => {
          if (currentStep <= 1) return;
          const jumpTo = (nextStep, currentHistory) => {
            return [...currentHistory?.slice(0, nextStep + 1)];
          };
          let currentHistory = [...providerProps.history];
          providerProps.history = jumpTo(providerProps.currentStep - 2, [
            currentHistory,
          ]);
        }),
      })
  );
  test("when game in progress ", () => {
    render(<GameFooter />, {
      providerProps,
    });
    expect(screen.queryByTestId("backAStepBtn")).toBeInTheDocument();
    expect(screen.queryByTestId("showHistoryButton")).toBeInTheDocument();
    expect(screen.queryByTestId("gameOver")).toBe(null);
    expect(screen.queryByTestId("stepHistory")).toBe(null);
  });

  test("when game in progress then click showHistory button then click outside history container", () => {
    render(<GameFooter />, {
      providerProps,
    });
    const showHistoryButton = screen.queryByTestId("showHistoryButton");
    fireEvent.click(showHistoryButton);
    expect(screen.queryByTestId("stepHistory")).toBeInTheDocument();
    fireEvent.mouseDown(document);
    expect(screen.queryByTestId("stepHistory")).toBe(null);
  });

  test("when game in progress then click showHistory button then press ESC", () => {
    render(<GameFooter />, {
      providerProps,
    });
    const event = new KeyboardEvent("keydown", { key: "Escape" });
    const showHistoryButton = screen.queryByTestId("showHistoryButton");
    fireEvent.click(showHistoryButton);
    expect(screen.queryByTestId("stepHistory")).toBeInTheDocument();
    act(() => {
      document.dispatchEvent(event);
    });
    expect(screen.queryByTestId("stepHistory")).toBe(null);
  });

  test("when game over with draw statement", () => {
    const providerPropsGameDraw = {
      gameState: GameState.draw,
    };
    render(
      <GameContext.Provider value={providerPropsGameDraw}>
        <GameFooter />
      </GameContext.Provider>,
      {
        providerPropsGameDraw,
      }
    );
    expect(screen.queryByTestId("backAStepBtn")).toBe(null);
    expect(screen.queryByTestId("showHistoryButton")).toBe(null);
    expect(screen.queryByTestId("gameOver")).toBeInTheDocument();
    expect(screen.queryByTestId("gameOver")).toHaveTextContent(GameState.draw);
  });

  test("when game over with Player X wins", () => {
    const providerPropsGameDraw = {
      gameState: GameState.playerXWins,
    };
    render(
      <GameContext.Provider value={providerPropsGameDraw}>
        <GameFooter />
      </GameContext.Provider>,
      {
        providerPropsGameDraw,
      }
    );
    expect(screen.queryByTestId("backAStepBtn")).toBe(null);
    expect(screen.queryByTestId("showHistoryButton")).toBe(null);
    expect(screen.queryByTestId("gameOver")).toBeInTheDocument();
    expect(screen.queryByTestId("gameOver")).toHaveTextContent(
      GameState.playerXWins
    );
  });
});
