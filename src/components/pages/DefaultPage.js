import React from "react";
import Header from "../header/Header";

import "./default-page.css";

const DefaultPage = () => {
    return (
        <div className="default-page">
            <Header />
            <h1 class="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">404</h1>
            <h3 className="f3 white">Oops! We don't recognise that URL</h3>
        </div>
    )
}

export default DefaultPage;