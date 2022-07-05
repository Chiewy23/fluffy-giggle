import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {

    const onClick = (name) => {
        console.log(`This is Robot ${name}`);
    }

    return robots.map(robot => {
        return <Card onClick={ () => onClick(robot.name) } key={robot.id} name={robot.name} email={robot.email} id={robot.id} />
    });
}

export default CardList;