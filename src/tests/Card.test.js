import { render, screen } from "@testing-library/react";
import Card from "../components/cards/Card";

describe("When mounting the Card component", () => {
    const stubProps = {
        name: "Charlie",
        email: "charlie@chaplin.com",
        id: "1234"
    };

    const stubCallback = jest.fn();

    it("should render the name props", () => {
        render(<Card  onClick={stubCallback} key={stubProps.id} name={stubProps.name} email={stubProps.email} id={stubProps.id} />);

        expect(screen.getByTestId("name").textContent).toBe("Charlie");
    });

    it("should render the email props", () => {
        render(<Card key={stubProps.id} name={stubProps.name} email={stubProps.email} id={stubProps.id} />);

        expect(screen.getByTestId("email").textContent).toBe("charlie@chaplin.com");
    });
});