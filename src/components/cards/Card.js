import React from "react";
import "./card.css";

import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const { name, email, id }  = props;
    const navigate = useNavigate();
    const redirect = () => {
        navigate(`/fluffy-giggle/${id}`, { state: { name, email, id }, replace: true });
    }
    
    return (
        <div className="custom-card card bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robot" src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2 data-testid="name">{ name }</h2>
                <p data-testid="email">{ email }</p>
            </div>

            <button className="f6 br3 link dim ph3 pv2 mb2 dib white bg-dark-gray" onClick={ () => redirect() }>View</button>
        </div>
    );
}

export default Card;