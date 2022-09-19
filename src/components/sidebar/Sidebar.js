import React, {useState} from "react";
import BasicButton from "../button/BasicButton";

import "./sidebar.css";

const Sidebar = (props) => {
    const { loggedIn, isOpen } = props;
    // const [width, setWidth] = useState("0%");
    const [width, setWidth] = useState("15%");

    const toggleSidebar = () => {
        isOpen = !isOpen;
        isOpen ? setWidth("5%") : setWidth("15%");
    }

    return loggedIn ? 
     (
        <React.Fragment>
            <div style={{width: width}}>
                <BasicButton onClick={() => {toggleSidebar()}} text="Add Robot"/>
                <BasicButton onClick={() => {console.log("Log Out")}} text="Log Out"/>
            </div>

            { this.props.children }
        </React.Fragment>
    ) : (
        <React.Fragment>
            <div style={{width: width}}>
                <BasicButton onClick={() => {console.log("Log In")}} text="Log In"/>
           </div>

           { props.children }
        </React.Fragment>
    )
 };

 export default Sidebar;