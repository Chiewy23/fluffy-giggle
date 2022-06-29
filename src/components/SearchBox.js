import React  from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue"
                   type="search"
                   data-testid="search-robot-input"
                   onChange={ searchChange }
                   placeholder="search robots..."/>
        </div>
    )
}

export default SearchBox;