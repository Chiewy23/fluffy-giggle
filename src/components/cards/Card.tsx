import React from "react";
import BasicButton from "../button/BasicButton";
import "./card.css";

import { useNavigate } from 'react-router-dom';
import { ICard } from "./ICard";

const Card = (props: ICard) => {
    const { name, email, text, id }  = props;
    const navigate = useNavigate();
    const redirect = () => {
        navigate(`/fluffy-giggle/${id}`, { state: { name, email, text, id }, replace: true });
    }
    
    return (
        <div className="custom-card card bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robot" src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2 data-testid={`name-${id}`}>{ name }</h2>
                <p data-testid={`email-${id}`}>{ email }</p>
            </div>

            <BasicButton onClick={ redirect } text="View" />
        </div>
    );
}

export default Card;