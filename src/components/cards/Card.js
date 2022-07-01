import React from "react";

const Card = (props) => {
    const { name, email, id }  = props;
    
    return (
        <div className="card bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2 data-testid="name">{ name }</h2>
                <p data-testid="email">{ email }</p>
            </div>
        </div>
    );
}

export default Card;