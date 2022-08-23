import React, { ChangeEventHandler }  from "react";

interface ISearchBox {
    searchChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({ searchChange } : ISearchBox) => {
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue"
                aria-label="Search Robots"
                type="search"
                data-testid="search-robot-input"
                onChange={ searchChange }
                placeholder="search robots..."/>
        </div>
    )
}

export default SearchBox;