import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("<Greeting />", () => {
  test("renders Welcome as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // Assert
    const welcomeElement = screen.getByText("Welcome", { exact: true });
    expect(welcomeElement).toBeInTheDocument();
  });

  test("renders ipsum dolor if button was not clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("Ipsum", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Lorem" only if the button was clicked', async () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    const outputElement = screen.getByText("Lorem");
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "Ipsum" if button is clicked', async () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    const outputElement = screen.queryByText("Ipsum", {exact: false});
    expect(outputElement).toBeNull()
  })
});
