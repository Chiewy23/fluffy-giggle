import React from "react";
import "./card.css";

import { useNavigate } from 'react-router-dom';
import BasicButton from "../basic-button/BasicButton";

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

            <BasicButton onClick={ redirect } text="View" />
        </div>
    );
}

export default Card;