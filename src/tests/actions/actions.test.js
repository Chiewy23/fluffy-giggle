import * as actions from "../../redux-robofriends/actions";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./../../redux-robofriends/constants";

const mockStore = configureMockStore([thunkMiddleware]);

describe("When using actions", () => {
    it("creates an action to search robots", () => {
        const text = "search text";
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        };

        expect(actions.setSearchField(text)).toEqual(expectedAction);
    });

    it("handles request robots API", () => {

        // onRequestRobots: () => requestRobots(dispatch)
        // const store = mockStore();
        // store.dispatch(actions.requestRobots());

        // const action = store.getActions();
        // console.log(action);
        // const expectedAction = {
        //     type: REQUEST_ROBOTS_PENDING
        // };

        // expect(action[0]).toEqual(expectedAction);
    });
});