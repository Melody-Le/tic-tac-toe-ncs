import { render } from "@testing-library/react";

const renderWithContext = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <GameContext.Provider value={providerProps}>{ui}</GameContext.Provider>,
    renderOptions
  );
};

// re-export everything
export * from "@testing-library/react";

// override render mothod:
export { renderWithContext as render };
