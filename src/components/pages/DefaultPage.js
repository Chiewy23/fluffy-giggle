import React from "react";
import Header from "../header/Header";

import "./default-page.css";

const DefaultPage = () => {
    return (
        <div className="default-page">
            <Header />
            <h3 className="f3">Oops! We don't recognise that URL</h3>
        </div>
    )
}

export default DefaultPage;