import * as actions from "../../redux-robofriends/actions";

import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./../../redux-robofriends/constants";

describe("When using actions", () => {
    it("creates an action to search robots", () => {
        const text = "search text";
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        };

        expect(actions.setSearchField(text)).toEqual(expectedAction);
    });

    it("handles request robots API", async () => {
        const stubDispatch = jest.fn();

        return actions.requestRobots(stubDispatch).then(() => {
            expect(stubDispatch).toBeCalledTimes(2);
        });
    });
});