import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Card from "../../components/cards/Card";

describe("When mounting the Card component", () => {
    const stubProps = {
        name: "Charlie",
        email: "charlie@chaplin.com",
        bs: "Info on robot",
        id: "1234"
    };

    it("should render the name props", () => {
        render(<Router>
            <Card key={stubProps.id} name={stubProps.name} email={stubProps.email} id={stubProps.id} />
        </Router>);

        expect(screen.getByTestId(`name-${stubProps.id}`).textContent).toBe("Charlie");
    });

    it("should render the email props", () => {
        render(<Router>
            <Card key={stubProps.id} name={stubProps.name} email={stubProps.email} id={stubProps.id} />
        </Router>);
        
        expect(screen.getByTestId(`email-${stubProps.id}`).textContent).toBe("charlie@chaplin.com");
    });
});