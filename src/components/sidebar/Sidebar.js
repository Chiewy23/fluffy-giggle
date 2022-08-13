import React, {useState} from "react";
import BasicButton from "../button/BasicButton";

import "./sidebar.css";

const Sidebar = (props) => {
    const { loggedIn, isOpen } = props;
    const [width, setWidth] = useState("0%");

    const toggleSidebar = () => {
        isOpen = !isOpen;
        isOpen ? setWidth("5%") : setWidth("15%");
    }

    return loggedIn ? 
     (
        <React.Fragment>
            <div style={{width: width}}>
                <BasicButton onClick={() => {console.log("Add Robot")}} text="Add Robot"/>
                <BasicButton onClick={() => {console.log("Log Out")}} text="Log Out"/>
            </div>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <div style={{width: width}}>
                <BasicButton onClick={() => {console.log("Log In")}} text="Log In"/>
=            </div>
        </React.Fragment>
    )
 };

 export default Sidebar;