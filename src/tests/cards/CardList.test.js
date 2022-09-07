import { render, screen, getByTestId } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CardList from "../../components/cards/CardList";

describe("When mounting the CardList component", () => {
    const stubRobot1 = {
        name: "Charlie",
        email: "charlie@chaplin.com",
        company: { bs: "bs1"},
        id: "1"
    };

    const stubRobot2 = {
        name: "Bob",
        email: "bob@chaplin.com",
        company: { bs: "bs2"},
        id: "2"
    };

    const stubRobot3 = {
        name: "Malcolm",
        email: "malcolm@chaplin.com",
        company: { bs: "bs3"},
        id: "3"
    };

    const stubRobotsArray = [ stubRobot1, stubRobot2, stubRobot3 ];

    it("should render the name props", () => {
        render(<Router>
            <CardList robots={stubRobotsArray} />
        </Router>);

        expect(screen.getByTestId(`name-${stubRobot1.id}`).textContent).toBe("Charlie");
        expect(screen.getByTestId(`name-${stubRobot2.id}`).textContent).toBe("Bob");
        expect(screen.getByTestId(`name-${stubRobot3.id}`).textContent).toBe("Malcolm");
    });

    it("should render the email props", () => {
        render(<Router>
            <CardList robots={stubRobotsArray} />
        </Router>);

        expect(screen.getByTestId(`email-${stubRobot1.id}`).textContent).toBe("charlie@chaplin.com");
        expect(screen.getByTestId(`email-${stubRobot2.id}`).textContent).toBe("bob@chaplin.com");
        expect(screen.getByTestId(`email-${stubRobot3.id}`).textContent).toBe("malcolm@chaplin.com");
    });
});