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
    UPDATE_UPDATETIMER,
    UPDATE_TIMERBARKEY,
    UPDATE_CURRENTQUESTION,
    UPDATE_FULLINITIALS,
    UPDATE_TIMERBARACTIVE,
    UPDATE_HIGHSCORES,
    CORRECT_ANSWER_GIVEN,
    INCORRECT_ANSWER_GIVEN,
    PLAY_AGAIN,
    BEGIN_QUIZ
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
        case UPDATE_UPDATETIMER:
            return {
                ...state,
                updateTimer: action.updateTimer,
            };
        case UPDATE_TIMERBARKEY:
            return {
                ...state,
                timerBarKey: action.timerBarKey,
            };
        case UPDATE_CURRENTQUESTION:
            return {
                ...state,
                currentQuestion: action.currentQuestion,
            };
        case UPDATE_FULLINITIALS:
            return {
                ...state,
                fullInitials: action.fullInitials,
            };
        case UPDATE_TIMERBARACTIVE:
            return {
                ...state,
                timerBarActive: action.timerBarActive,
            };
        case UPDATE_HIGHSCORES:
            return {
                ...state,
                highScores: action.highScores,
            };
        case CORRECT_ANSWER_GIVEN:
            return {
                ...state,
                currentQuestion: action.currentQuestion,
                timerBarActive: action.timerBarActive,
                combo: action.combo,
                pointsMultiplier: action.pointsMultiplier,
                score: action.score,
            };
        case INCORRECT_ANSWER_GIVEN:
            return {
                ...state,
                timeRemaining: action.timeRemaining,
                timerBarActive: action.timerBarActive,
                combo: action.combo,
                pointsMultiplier: action.pointsMultiplier,
            };
        case PLAY_AGAIN:
            return {
                ...state,
                currentQuestion: action.currentQuestion,
                currentCategory: action.currentCategory,
                score: action.score,
                timeRemaining: action.timeRemaining,
                timerActive: action.timerActive,
                visibility: action.visibility
            };
        case BEGIN_QUIZ:
            return {
                ...state,
                currentCategory: action.currentCategory,
                visibility: action.visibility,
                timerActive: action.timerActive
            }

        default:
            return {
                ...state,
            };
    }
};

export function useSiteReducer(initialState) {
    return useReducer(reducer, initialState)
}