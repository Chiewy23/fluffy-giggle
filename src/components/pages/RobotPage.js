import React from "react";
import DefaultPage from "./DefaultPage";
import BasicButton from "../button/BasicButton";
import Header from "../header/Header";
import "./robot-page.css";

import { useLocation, useNavigate } from "react-router-dom";

const RobotPage = () => {
    const { state }  = useLocation();
    const navigate = useNavigate();

    const redirectToHomePage = () => {
        navigate(`/fluffy-giggle`);
    }

    if (state === null) {
        return <DefaultPage onClick={ redirectToHomePage } />
    }

    return (
        <React.Fragment>
            <Header />
            <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div className="tc">
                    <img alt="robot" src={ `https://robohash.org/${state.id}?200x200` } />
                    <h1 className="f4">{ state.name }</h1>
                    <p>{ state.email }</p>
                    <hr className="mw3 bb bw1 b--black-10"/>
                </div>
                <p className="tc lh-copy measure center f6 black-70">
                    { state.text }
                </p>

                <div className="robot-button">
                    <BasicButton onClick={ redirectToHomePage } text="Home" />
                </div>
            </article>
        </React.Fragment>
    );
}

export default RobotPage;