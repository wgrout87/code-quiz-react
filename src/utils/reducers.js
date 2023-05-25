import { useReducer } from "react";
import {
    UPDATE_QUIZQUESTIONS,
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_QUIZQUESTIONS:
            console.log("Quiz Questions Updated");
            return {
                ...state,
                quizQuestions: action.quizQuestions,
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