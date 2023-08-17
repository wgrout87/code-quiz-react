import React from "react";
import { UPDATE_CORRECTANSWERGIVEN, UPDATE_TIMERBARKEY, CORRECT_ANSWER_GIVEN, INCORRECT_ANSWER_GIVEN } from "../../utils/actions";
import { useSiteContext } from "../../utils/GlobalState";

function Answer({
    answer,
    answerCorrect,
}) {
    const [state, dispatch] = useSiteContext();

    return (
        <button
            data-index={0}
            className="questionAnswer"
            onClick={(e) => {
                // The timerBarKey is incremented so that the timer bar will snap to full
                dispatch({
                    type: UPDATE_TIMERBARKEY,
                    timerBarKey: state.timerBarKey + 1
                })
                // answerCorrect is a boolean that is passed in for each possible answer. It is set in the questions.js file for every possible answer
                if (answerCorrect) {
                    dispatch({
                        type: CORRECT_ANSWER_GIVEN,
                        // If the answer was correct, the current question will advance to the next question
                        currentQuestion: state.currentQuestion + 1,
                        // The timer bar will be activated
                        timerBarActive: true,
                        // The current combo will increase
                        combo: state.combo + 1,
                        // The points multiplier will increase
                        pointsMultiplier: state.pointsMultiplier + .1,
                        // The score will increase
                        score: state.score + (1000 * state.pointsMultiplier),
                    });
                    // The timer bar is reset with 15 seconds remaining
                    state.resetTimerBar(15);
                } else {
                    dispatch({
                        type: INCORRECT_ANSWER_GIVEN,
                        // If the answer was incorrect, 10 seconds is deducted from the time remaining, to a minimum of 0 seconds
                        timeRemaining: Math.max(0, (state.timeRemaining - 10)),
                        // The timer bar deactivates
                        timerBarActive: false,
                        // The combo is reduced to 0
                        combo: 0,
                        // The points multiplier is reduced to 1
                        pointsMultiplier: 1,
                    });
                    // The timer bar is reset with 0 seconds remaining
                    state.resetTimerBar(0);
                    // The incorrect answer choice will vanish
                    e.target.style.opacity = 0;
                    // The cursor will no longer change when hovering over the button
                    e.target.style.cursor = 'initial';
                    // The button will be disabled to prevent multiple clicks of the same wrong answer
                    e.target.disabled = true;
                    // state.correctAnswerGiven will be set to false
                    dispatch({
                        type: UPDATE_CORRECTANSWERGIVEN,
                        correctAnswerGiven: false
                    });
                };
            }}
        >
            {answer}
        </button>
    )
}

export default Answer;