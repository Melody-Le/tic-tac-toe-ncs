import {
  render,
  screen,
  fireEvent,
} from "../../test-utils/testing-library-utils";
import { GameState, PLAYER_O } from "../../utils/constant";
import Step from "./Step";

describe("StepItem Flow", () => {
  let providerProps;
  beforeEach(
    () =>
      (providerProps = {
        player: PLAYER_O,
        gameState: GameState.inProgress,
        currentStep: 3,
        history: [
          {
            step: 0,
            squares: [null, null, null, null, null, null, null, null, null],
            squareIndex: null,
          },
          {
            step: 1,
            squares: ["X", null, null, null, null, null, null, null, null],
            squareIndex: 0,
          },
          {
            step: 2,
            squares: ["X", "O", null, null, null, null, null, null, null],
            squareIndex: 1,
          },
          {
            step: 3,
            squares: ["X", "O", "X", null, null, null, null, null, null],
            squareIndex: 2,
          },
        ],
        handleHistoryStepClick: jest.fn((stepDisplay) => {
          const jumpTo = (nextStep, currentHistory) => {
            return [...currentHistory?.slice(0, nextStep + 1)];
          };
          let currentHistory = [...providerProps.history];
          providerProps.history = jumpTo(stepDisplay - 1, [currentHistory]);
        }),
      })
  );

  test("display the last step", () => {
    render(<Step stepDisplay={3} squareIndex={1} />, {
      providerProps,
    });
    const stepBtn = screen.getByTestId("step-3");
    expect(stepBtn).toBeInTheDocument();
    expect(stepBtn).toHaveTextContent("LATEST STEP : 3");
    expect(stepBtn).toBeDisabled();
  });

  test("display the initital step: start game", () => {
    render(<Step stepDisplay={0} squareIndex={null} />, {
      providerProps,
    });
    const stepBtn = screen.getByTestId("step-0");
    expect(stepBtn).toBeInTheDocument();
    expect(stepBtn).toHaveTextContent("START GAME");
    expect(stepBtn).toBeDisabled();
  });

  test("display the innactive step: step 1", () => {
    render(<Step stepDisplay={1} squareIndex={0} />, {
      providerProps,
    });
    const stepBtn = screen.getByTestId("step-1");
    expect(stepBtn).toBeInTheDocument();
    expect(stepBtn).toHaveTextContent("STEP # 1");
    expect(stepBtn).toBeDisabled();
  });

  test("display the active step: at step 2", () => {
    const trigger = jest.fn();
    render(<Step stepDisplay={2} squareIndex={1} onShowHistory={trigger} />, {
      providerProps,
    });
    const stepBtn = screen.getByTestId("step-2");
    expect(stepBtn).toBeInTheDocument();
    expect(stepBtn).toHaveTextContent("BACK TO STEP # 2");
    expect(stepBtn).not.toBeDisabled();

    fireEvent.click(stepBtn);

    expect(providerProps.handleHistoryStepClick).toHaveBeenCalledTimes(1);
    expect(providerProps.handleHistoryStepClick).toHaveBeenCalledWith(2);
    expect(trigger).toHaveBeenCalledTimes(1);
  });
});
