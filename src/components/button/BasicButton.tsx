import React from "react";

interface IButton {
    onClick: Function;
    text: string;
}

const BasicButton = ({ onClick, text } : IButton) => {
    return (
        <button className="f6 br3 link dim ph3 pv2 mb2 dib white bg-dark-gray" 
                onClick={ () => onClick() }
                data-testid="basic-button">
                    { text }
        </button>
        );
}

export default BasicButton;