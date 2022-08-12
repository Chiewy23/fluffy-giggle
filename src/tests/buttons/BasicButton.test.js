import { render, screen, fireEvent } from "@testing-library/react";
import BasicButton from "../../components/button/BasicButton";

describe("When mounting the Card component", () => {
    const stubText = "Some text";
    const stubCallback = jest.fn();

    it("should render the text props", () => {
        render(<BasicButton onClick={stubCallback} text={stubText} />);

        expect(screen.getByTestId("basic-button").textContent).toBe(stubText);
    });

    it("should invoke the callback when clicked", () => {
        render(<BasicButton onClick={stubCallback} text={stubText} />);

        const button = screen.getByTestId("basic-button");
        fireEvent.click(button)
        
        expect(stubCallback).toBeCalledTimes(1);
    });
});