import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "../components/cards/Card";
import CardList from "../components/cards/CardList";

describe("When mounting the ErrorBoundary component", () => {
    describe("and there is no error", () => {
        it("should not render the error-message props", () => {
            render(
                <Router>
                    <ErrorBoundary errorMessage-={"Oops. That is not good..."}>
                        <CardList robots={{}} />
                    </ErrorBoundary>
                </Router>
            );

            expect(screen.queryByText("Oops. That is not good...")).toBeNull();
        });
    });
});