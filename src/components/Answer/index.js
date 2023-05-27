import React from "react";
import { UPDATE_TIMEREMAINING } from "../../utils/actions";
import { useSiteContext } from "../../utils/GlobalState";

function Answer({
    answer,
    answerCorrect,
    currentQuestion,
    setCurrentQuestion,
    resetTimerBar,
    setTimerBarActive,
    combo,
    setCombo,
    pointsMultiplier,
    setPointsMultiplier,
    score,
    setScore,
    setCorrectAnswerGiven,
    timerBarKey,
    setTimerBarKey
}) {
    const [state, dispatch] = useSiteContext();
    return (
        <button
            data-index={0}
            className="questionAnswer"
            onClick={(e) => {
                setTimerBarKey(timerBarKey + 1);
                if (answerCorrect) {
                    setCurrentQuestion(currentQuestion + 1);
                    setTimerBarActive(true);
                    setCombo(combo + 1);
                    setPointsMultiplier(pointsMultiplier + .1);
                    setScore(score + (1000 * pointsMultiplier));
                    resetTimerBar(15);
                } else {
                    dispatch({
                        type: UPDATE_TIMEREMAINING,
                        timeRemaining: Math.max(0, (state.timeRemaining - 10)),
                    });
                    setTimerBarActive(false);
                    setCombo(0);
                    setPointsMultiplier(1);
                    resetTimerBar(0);
                    e.target.style.opacity = 0;
                    e.target.style.cursor = 'initial';
                    e.target.disabled = true;
                    setCorrectAnswerGiven(false);
                };
            }}
        >
            {answer}
        </button>
    )
}

export default Answer;