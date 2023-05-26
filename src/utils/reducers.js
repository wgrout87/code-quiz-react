import { useReducer } from "react";
import {
    UPDATE_QUIZQUESTIONS,
    UPDATE_CURRENTCATEGORY,
    UPDATE_VISIBILITY,
    UPDATE_TIMEREMAINING,
    UPDATE_TIMERACTIVE,
    UPDATE_TIMERWIDTH,
    UPDATE_TIMELEFT,
    UPDATE_COMBO,
    UPDATE_POINTSMULTIPLIER,
    UPDATE_SCORE,
    UPDATE_CORRECTANSWERGIVEN,
    UPDATE_TIMER,
    UPDATE_TIMERBARKEY,
    UPDATE_CURRENTQUESTION,
    UPDATE_FULLINITIALS
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_QUIZQUESTIONS:
            return {
                ...state,
                quizQuestions: action.quizQuestions,
            };
        case UPDATE_CURRENTCATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory,
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