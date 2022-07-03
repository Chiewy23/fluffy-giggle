import { render, screen } from "@testing-library/react";
import ErrorBoundary from "../components/cards/Card";
import CardList from "../components/cards/CardList";

describe("When mounting the ErrorBoundary component", () => {
    describe("and there is no error", () => {
        it("should not render the error-message props", () => {
            render(
                <ErrorBoundary errorMessage-={"Oops. That is not good..."}>
                    <CardList robots={{}} />
                </ErrorBoundary>
            );

            expect(screen.queryByText("Oops. That is not good...")).toBeNull();
        });
    });
});