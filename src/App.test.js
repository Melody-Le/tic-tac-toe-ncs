import React from "react";
import App from "./App";
import { theme } from "./theme/theme";
import { GameProvider } from "./Context/GameContext";
import { render } from "@testing-library/react";

it("matches snapshot", () => {
  const container = render(
    <GameProvider theme={theme}>
      <App />
    </GameProvider>
  );
  expect(container).toMatchSnapshot();
  // expect(screen.getByTestId("board")).toBeInTheDocument();
});
