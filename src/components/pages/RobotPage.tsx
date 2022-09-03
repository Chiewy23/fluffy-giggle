import React from "react";
import DefaultPage from "./DefaultPage";
import BasicButton from "../button/BasicButton";
import Header from "../header/Header";
import "./robot-page.css";

import { useLocation, useNavigate } from "react-router-dom";
import { IStateRobotPage } from "./IStateRobotPage";

const RobotPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const redirectToHomePage = () => {
        navigate(`/fluffy-giggle`);
    }

    if (location.state === null) {
        return <DefaultPage onClick={ redirectToHomePage } text="Oops! We don't recognise that URL." />
    }

    const { name, email, text, id }  = location.state as IStateRobotPage;
    
    return (
        <React.Fragment>
            <Header />
            <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div className="tc">
                    <img alt="robot" src={ `https://robohash.org/${id}?200x200` } />
                    <h1 className="f4">{ name }</h1>
                    <p>{ email }</p>
                    <hr className="mw3 bb bw1 b--black-10"/>
                </div>
                <p className="tc lh-copy measure center f6 black-70">
                    { text }
                </p>

                <div className="robot-button">
                    <BasicButton onClick={ redirectToHomePage } text="Home" />
                </div>
            </article>
        </React.Fragment>
    );
}

export default RobotPage;