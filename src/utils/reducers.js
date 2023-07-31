import { useReducer } from "react";
import {
    UPDATE_QUIZQUESTIONS,
    UPDATE_CURRENTCATEGORY,
    UPDATE_VISIBILITY,
    UPDATE_TIMEREMAINING,
    UPDATE_TIMERACTIVE,
    UPDATE_TIMERBARWIDTH,
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
        case UPDATE_VISIBILITY:
            return {
                ...state,
                visibility: action.visibility,
            };
        case UPDATE_TIMEREMAINING:
            return {
                ...state,
                timeRemaining: action.timeRemaining,
            };
        case UPDATE_TIMERACTIVE:
            return {
                ...state,
                timerActive: action.timerActive,
            };
        case UPDATE_TIMERBARWIDTH:
            return {
                ...state,
                timerBarWidth: action.timerBarWidth,
            };
        case UPDATE_TIMELEFT:
            return {
                ...state,
                timeLeft: action.timeLeft,
            };
        case UPDATE_COMBO:
            return {
                ...state,
                combo: action.combo,
            };
        case UPDATE_POINTSMULTIPLIER:
            return {
                ...state,
                pointsMultiplier: action.pointsMultiplier,
            };
        case UPDATE_SCORE:
            return {
                ...state,
                score: action.score,
            };
        case UPDATE_CORRECTANSWERGIVEN:
            return {
                ...state,
                correctAnswerGiven: action.correctAnswerGiven,
            };
        case UPDATE_TIMER:
            return {
                ...state,
                timer: action.timer,
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