import React from "react";
import Card from "./Card";

const CardList = ({ onClick, robots }) => {

    return robots.map(robot => {
        return <Card onClick={onClick} key={robot.id} name={robot.name} email={robot.email} id={robot.id} />
    });
}

export default CardList;