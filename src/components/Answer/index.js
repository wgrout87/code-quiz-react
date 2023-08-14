import React from "react";
import { UPDATE_TIMEREMAINING, UPDATE_COMBO, UPDATE_POINTSMULTIPLIER, UPDATE_SCORE, UPDATE_CORRECTANSWERGIVEN, UPDATE_TIMERBARKEY, UPDATE_CURRENTQUESTION, UPDATE_TIMERBARACTIVE, CORRECT_ANSWER_GIVEN, INCORRECT_ANSWER_GIVEN } from "../../utils/actions";
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
                dispatch({
                    type: UPDATE_TIMERBARKEY,
                    timerBarKey: state.timerBarKey + 1
                })
                if (answerCorrect) {
                    dispatch({
                        type: CORRECT_ANSWER_GIVEN,
                        currentQuestion: state.currentQuestion + 1,
                        timerBarActive: true,
                        combo: state.combo + 1,
                        pointsMultiplier: state.pointsMultiplier + .1,
                        score: state.score + (1000 * state.pointsMultiplier),
                    });
                    state.resetTimerBar(15);
                } else {
                    dispatch({
                        type: INCORRECT_ANSWER_GIVEN,
                        timeRemaining: Math.max(0, (state.timeRemaining - 10)),
                        timerBarActive: false,
                        combo: 0,
                        pointsMultiplier: 1,
                    });
                    state.resetTimerBar(0);
                    e.target.style.opacity = 0;
                    e.target.style.cursor = 'initial';
                    e.target.disabled = true;
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