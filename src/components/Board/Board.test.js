import { render, screen } from "../../test-utils/testing-library-utils";

import Board from "./Board";

describe("Board Flow", () => {
  let providerProps;
  beforeEach(
    () =>
      (providerProps = {
        currentSquares: [null, null, null, null, null, null, null, null, null],
      })
  );

  test("render 9 squares", () => {
    render(<Board />, { providerProps });
    const gridCell = screen.getAllByRole("gridcell");
    expect(gridCell).toHaveLength(9);
  });
});
