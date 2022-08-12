import React from "react";
import Header from "../header/Header";
import BasicButton from "../button/BasicButton";

import "./default-page.css";

const DefaultPage = ({ onClick }) => {
    return (
        <div className="default-page">
            <Header />
            <h1 className="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">404</h1>
            <h3 className="f3 white">Oops! We don't recognise that URL.</h3>

            <BasicButton onClick={ () => onClick() } text="Home" />
        </div>
    )
}

export default DefaultPage;