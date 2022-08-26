import { IRobot } from "components/home/IRobot";
import { ICardList } from "./ICardList";

import React from "react";
import Card from "./Card";

const CardList = ({ robots } : ICardList) => {
    return <React.Fragment> {
        robots.map((robot: IRobot) => {
            return <Card key={robot.id}
                        name={robot.name}
                        email={robot.email}
                        text={robot.company.bs}
                        id={robot.id} />
        })
    } </React.Fragment> 
}

export default CardList;