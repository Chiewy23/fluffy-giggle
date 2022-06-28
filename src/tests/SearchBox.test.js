import {render, screen} from "@testing-library/react";
import SearchBox from "../components/SearchBox";

const stubOnSearchChange = jest.fn();

describe("When mounting the SearchBox component", () => {
    it("should render the placeholder text", () => {
        render(<SearchBox searchChange={ stubOnSearchChange } />)
        expect(screen.getByPlaceholderText("search robots...")).toBeDefined();
    });
});