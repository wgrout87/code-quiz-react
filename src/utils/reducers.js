import { useReducer } from "react";
import {
    UPDATE_USERNAME_AND_PASSWORD,
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_USERNAME_AND_PASSWORD:
            console.log("Username and password updated!");
            return {
                ...state,
                username: action.username,
                password: action.password,
            };

        default:
            return {
                ...state,
            };
    }
};

export function useSiteReducer(initialState) {
    return useReducer(reducer, initialState)
}