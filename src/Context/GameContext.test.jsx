// import { render, screen } from "../../test-utils/testing-library-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Game from "../components/Game/Game";
import { GameProvider, GameContext, useGame } from "./GameContext";
import { theme } from "../theme/theme";

describe("Game Logic", () => {
  test("Should render initial values", () => {
    render(
      <GameProvider>
        <Game />
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
        <Game />
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
    fireEvent.click(screen.queryByRole("button", { name: /restart/i }));
  });

  test("click show History button", () => {
    render(
      <GameProvider>
        <Game />
      </GameProvider>
    );
    const gridCell = screen.getAllByRole("gridcell");

    const showHistoryBtn = screen.getByTestId("showHistoryButton");

    fireEvent.click(showHistoryBtn);

    expect(screen.queryByTestId("stepHistory")).toBeInTheDocument();
    expect(screen.queryByTestId("stepHistory")).toHaveTextContent(
      "LETS START GAME"
    );
    fireEvent.mouseDown(document);
    expect(screen.queryByTestId("stepHistory")).not.toBeInTheDocument();

    fireEvent.click(gridCell[0]);
    fireEvent.click(gridCell[1]);
    fireEvent.click(gridCell[2]);

    expect(screen.getByTestId("playerTurnAndStep")).toHaveTextContent(
      "STEP 4 : O TURN"
    );

    fireEvent.click(showHistoryBtn);

    const steps = screen.getAllByTestId("steps");
    expect(steps).toHaveLength(4);
    expect(steps[0]).toHaveTextContent("LATEST STEP : 3");
    expect(steps[1]).toHaveTextContent("BACK TO STEP : 2");
    expect(steps[2]).toHaveTextContent("STEP : 1");
    expect(steps[3]).toHaveTextContent("START GAME");

    fireEvent.click(screen.getByTestId("step-2"));

    expect(screen.getByTestId("playerTurnAndStep")).toHaveTextContent(
      "STEP 2 : O TURN"
    );
    fireEvent.click(screen.queryByRole("button", { name: /restart/i }));
  });

  test("Hover On History Steps 2, then that square get indicating from that step will get highlight", () => {
    render(
      <GameProvider>
        <Game />
      </GameProvider>
    );
    const gridCell = screen.getAllByRole("gridcell");

    const showHistoryBtn = screen.getByTestId("showHistoryButton");

    fireEvent.click(gridCell[0]);
    fireEvent.click(gridCell[1]);
    fireEvent.click(gridCell[2]);

    fireEvent.click(showHistoryBtn);

    const steps = screen.getAllByTestId("steps");
    fireEvent.mouseOver(steps[1]);
    expect(screen.getByTestId("cell-1")).toHaveStyle(
      `background-color: ${theme.secondHightlight}`
    );

    fireEvent.mouseOut(steps[1]);
    expect(screen.getByTestId("cell-1")).toHaveStyle(
      `background-color: ${theme.secondDarkBlue}`
    );

    fireEvent.click(screen.queryByRole("button", { name: /restart/i }));
  });

  test("Click Button Back A Step, it will update the game statement into Previous Step of that User", () => {
    render(
      <GameProvider>
        <Game />
      </GameProvider>
    );
    const gridCell = screen.getAllByRole("gridcell");
    const backAStep = screen.getByTestId("backAStepBtn");

    fireEvent.click(gridCell[0]);
    fireEvent.click(gridCell[1]);
    fireEvent.click(gridCell[2]);

    expect(screen.getByTestId("playerTurnAndStep")).toHaveTextContent(
      "STEP 4 : O TURN"
    );

    fireEvent.click(backAStep);

    expect(screen.getByTestId("playerTurnAndStep")).toHaveTextContent(
      "STEP 2 : O TURN"
    );

    fireEvent.click(screen.queryByRole("button", { name: /restart/i }));
  });
});
