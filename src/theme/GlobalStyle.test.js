import "jest-styled-components";
import GlobalStyle from "./GlobalStyle";
import renderer from "react-test-renderer";

test("should have global style", () => {
  renderer.create(<GlobalStyle />);
  expect(document.head).toMatchSnapshot();
});
