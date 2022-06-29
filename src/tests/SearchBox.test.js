import { fireEvent, render, screen } from "@testing-library/react";
import SearchBox from "../components/SearchBox";

describe("When mounting the SearchBox component", () => {
    it("should render the placeholder text", () => {
        const stubOnSearchChange = jest.fn();
        render(<SearchBox searchChange={ stubOnSearchChange } />)

        expect(screen.getByPlaceholderText("search robots...")).toBeDefined();
    });

    it("should invoke the the callback function on input", () => {
        const stubOnSearchChange = jest.fn();
        render(<SearchBox searchChange={ stubOnSearchChange } />)

        fireEvent.change(screen.getByTestId("search-robot-input"), { target: { value: "Charlie" } });

        expect(stubOnSearchChange).toBeCalledTimes(1);
    });
});