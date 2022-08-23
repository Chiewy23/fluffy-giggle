import { ChangeEventHandler }  from "react";

export interface ISearchBox {
    searchChange: ChangeEventHandler<HTMLInputElement>;
}