import React from "react";
import { IScroll } from "./IScroll";

import "./scroll.css";

const Scroll = (props: IScroll) => {
    return (
        <div className="scroll">
            { props.children }
        </div>
    );
};

export default Scroll;