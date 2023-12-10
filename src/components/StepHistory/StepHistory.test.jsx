import {
  render,
  screen,
  fireEvent,
} from "../../test-utils/testing-library-utils";
import { GameContext } from "../../Context/GameContext";
import StepHistory from "./StepHistory";

describe("StepHistory flow", () => {
  let providerProps;
  beforeEach(
    () =>
      (providerProps = {
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

  test("when game have 4 steps in history", () => {
    const trigger = jest.fn();
    render(<StepHistory onShowHistory={trigger} />, {
      providerProps,
    });
    const stepHistoryContainer = screen.getByTestId("stepHistory");

    const stepList = screen.getAllByTestId("steps");

    const stepBtn0 = screen.getByTestId("step-0");
    const stepBtn1 = screen.getByTestId("step-1");
    const stepBtn2 = screen.getByTestId("step-2");
    const stepBtn3 = screen.getByTestId("step-3");

    expect(stepHistoryContainer).toBeInTheDocument();
    expect(stepList).toHaveLength(4);
    expect(stepBtn0).toHaveTextContent("START GAME");
    expect(stepBtn0).toBeDisabled();
    expect(stepBtn1).toHaveTextContent("STEP # 1");
    expect(stepBtn1).toBeDisabled();
    expect(stepBtn2).toHaveTextContent("BACK TO STEP # 2");
    expect(stepBtn2).not.toBeDisabled();
    expect(stepBtn3).toHaveTextContent("LATEST STEP : 3");
    expect(stepBtn3).toBeDisabled();

    fireEvent.click(stepBtn2);

    expect(providerProps.handleHistoryStepClick).toHaveBeenCalledTimes(1);
    expect(providerProps.handleHistoryStepClick).toHaveBeenCalledWith(2);
    expect(trigger).toHaveBeenCalledTimes(1);

    // expect(trigger).toHaveBeenCalledTimes(1);
  });
  test("when game start", () => {
    const providerPropsGameStart = {
      currentStep: 0,
      history: [
        {
          step: 0,
          squares: [null, null, null, null, null, null, null, null, null],
          squareIndex: null,
        },
      ],
    };
    const trigger = jest.fn();
    render(
      <GameContext.Provider value={providerPropsGameStart}>
        <StepHistory onShowHistory={trigger} />
      </GameContext.Provider>,
      {
        providerPropsGameStart,
      }
    );
    const stepHistoryContainer = screen.getByTestId("stepHistory");
    expect(stepHistoryContainer).toHaveTextContent("LETS START GAME");
  });
});
