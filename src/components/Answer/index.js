import React from "react";

function Answer({
    answer,
    answerValue,
    resetTimerBar,
    setTimerBarActive,
    setTransition,
    combo,
    setCombo,
    pointsMultiplier,
    setPointsMultiplier,
    score,
    setScore
}) {
    return (
        <button
            data-index={0}
            className="questionAnswer"
            onClick={(e) => {
                if (answerValue) {
                    setTimerBarActive(false);
                    setCombo(combo + 1);
                    setPointsMultiplier(pointsMultiplier + .1);
                    setScore(score + (1000 * pointsMultiplier));
                    resetTimerBar(15);
                } else {
                    setTimerBarActive(false);
                    setCombo(0);
                    setPointsMultiplier(1);
                    resetTimerBar(0)
                };
                setTimerBarActive(true);
                setTransition('transition');
            }}
        >
            {answer}
        </button>
    )
}

export default Answer;