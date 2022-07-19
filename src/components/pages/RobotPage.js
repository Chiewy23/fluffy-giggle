import React from "react";
import { useLocation } from "react-router-dom";

const RobotPage = () => {
    const { state }  = useLocation();
    console.log(state);

    return (
        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
                <img alt="robot" src={ `https://robohash.org/${state.id}?200x200` } />
                <h1 className="f4">{ state.name }</h1>
                <p>{ state.email }</p>
                <hr className="mw3 bb bw1 b--black-10"/>
            </div>
            <p className="lh-copy measure center f6 black-70">
                Quite affectionate and outgoing.
                She loves to get chin scratches and will
                roll around on the floor waiting for you give her more of them.
            </p>
        </article>
    );
}

export default RobotPage;