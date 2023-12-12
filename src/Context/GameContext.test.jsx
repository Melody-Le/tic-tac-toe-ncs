// import { render, screen } from "../../test-utils/testing-library-utils";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GameState, PLAYER_X, PLAYER_O } from "../utils/constant";
import Game from "../components/Game/Game";
import { GameProvider, GameContext, useGame } from "./GameContext";
import { act } from "react-dom/test-utils";
import GameHeader from "../components/GameHeader/GameHeader";
import Board from "../components/Board/Board";
import GameFooter from "../components/GameFooter/GameFooter";

const CustomGame = () => {
  const {
    history,
    gameState,
    currentSquares,
    currentStep,
    player,
    winningLine,
    squareIndexOnHistoryHover,
    jumpTo,
    handleRestart,
    handleBackAStep,
    handleHistoryMouseOver,
    handleHistoryMouseOut,
    handleHistoryStepClick,
    handleSquareClick,
  } = useGame();
  return (
    <>
      <GameHeader />;
      <Board />
      <GameFooter />
    </>
  );
};

describe("Game Logic", () => {
  const setItemMock = jest.fn();
  const getItemMock = jest.fn();

  afterEach(cleanup);
  // beforeEach(() => {
  //   Storage.prototype.setItem = setItemMock;
  //   Storage.prototype.getItem = getItemMock;
  // });

  // afterEach(() => {
  //   setItemMock.mockRestore();
  //   getItemMock.mockRestore();
  // });

  test("Should render initial values", () => {
    render(
      <GameProvider>
        <CustomGame />
      </GameProvider>
    );
    const restartBtn = screen.getByRole("button", { name: /restart/i });
    const playerTurnAndStep = screen.queryByTestId("playerTurnAndStep");
    const gridCell = screen.getAllByRole("gridcell");
    const backAStep = screen.queryByTestId("backAStepBtn");
    const showHistoryBtn = screen.queryByTestId("showHistoryButton");
    const gameOverContainer = screen.queryByTestId("gameOver");

    expect(restartBtn).toHaveTextContent("Restart");
    expect(playerTurnAndStep).toHaveTextContent("STEP 1 : X TURN");
    expect(gridCell).toHaveLength(9);
    gridCell.forEach((cell) => {
      expect(cell).toBeEmptyDOMElement();
    });
    expect(backAStep).toBeInTheDocument();
    expect(showHistoryBtn).toBeInTheDocument();
    expect(gameOverContainer).toBe(null);
  });

  test("Game FLow from Initital till Game Over:X win", () => {
    render(
      <GameProvider>
        <CustomGame />
      </GameProvider>
    );
    const restartBtn = screen.queryByRole("button", { name: /restart/i });
    const playerTurnAndStep = screen.queryByTestId("playerTurnAndStep");
    const gridCell = screen.getAllByRole("gridcell");
    const backAStep = screen.queryByTestId("backAStepBtn");

    fireEvent.click(gridCell[0]);
    expect(gridCell[0]).toHaveTextContent("X");
    expect(gridCell[0]).toBeDisabled();
    fireEvent.click(gridCell[1]);
    expect(gridCell[1]).toHaveTextContent("O");
    expect(gridCell[1]).toBeDisabled();
    expect(playerTurnAndStep).toHaveTextContent("STEP 3 : X TURN");
    fireEvent.click(gridCell[3]);
    fireEvent.click(gridCell[4]);
    fireEvent.click(gridCell[6]);

    expect(backAStep).not.toBeInTheDocument();
    expect(restartBtn).toBeEnabled();
    expect(playerTurnAndStep).not.toBeInTheDocument();
    expect(screen.queryByTestId("gameOver")).toHaveTextContent("X WINS");
    expect(screen.queryByTestId("showHistoryButton")).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /restart/i }));
  });

  // test("after that", () => {
  //   render(
  //     <GameProvider>
  //       <CustomGame />
  //     </GameProvider>
  //   );
  //   screen.debug();
  //   const restartBtn = screen.queryByRole("button", { name: /restart/i });
  //   const playerTurnAndStep = screen.queryByTestId("playerTurnAndStep");
  //   const gridCell = screen.getAllByRole("gridcell");
  //   const backAStep = screen.queryByTestId("backAStepBtn");

  //   fireEvent.click(gridCell[0]);
  //   expect(gridCell[0]).toHaveTextContent("X");
  //   expect(gridCell[0]).toBeDisabled();
  //   fireEvent.click(gridCell[1]);
  //   expect(gridCell[1]).toHaveTextContent("O");
  //   expect(gridCell[1]).toBeDisabled();
  //   // expect(playerTurnAndStep).toHaveTextContent("STEP 3 : X TURN");
  //   fireEvent.click(gridCell[3]);
  //   fireEvent.click(gridCell[4]);
  //   fireEvent.click(gridCell[6]);

  //   expect(backAStep).not.toBeInTheDocument();
  //   expect(restartBtn).toBeEnabled();
  //   expect(playerTurnAndStep).not.toBeInTheDocument();
  //   expect(screen.queryByTestId("gameOver")).toHaveTextContent("X WINS");
  //   expect(screen.queryByTestId("showHistoryButton")).not.toBeInTheDocument();
  //   fireEvent.click(restartBtn);
  // });
});
