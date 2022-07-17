import React from "react";
import "./card.css";

import { Link } from 'react-router-dom';

const Card = (props) => {
    const { name, email, id }  = props;
    
    return (
        <div className="custom-card card bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robot" src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2 data-testid="name">{ name }</h2>
                <p data-testid="email">{ email }</p>
            </div>

            <Link to={`/fluffy-giggle/${id}`} state={{ name, email, id }} >
                View Robot
            </Link>
        </div>
    );
}

export default Card;