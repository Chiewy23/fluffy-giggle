import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    return robots.map(robot => {
        return <Card key={robot.id}
                     name={robot.name}
                     email={robot.email}
                     text={robot.company.bs}
                     id={robot.id} />
    });
}

export default CardList;