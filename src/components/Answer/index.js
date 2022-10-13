import React from "react";

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
    setScore
}) {
    return (
        <button
            data-index={0}
            className="questionAnswer"
            onClick={(e) => {
                if (answerCorrect) {
                    setCurrentQuestion(currentQuestion + 1);
                    setTimerBarActive(true);
                    setCombo(combo + 1);
                    setPointsMultiplier(pointsMultiplier + .1);
                    setScore(score + (1000 * pointsMultiplier));
                    resetTimerBar(15);
                } else {
                    setTimerBarActive(false);
                    setCombo(0);
                    setPointsMultiplier(1);
                    resetTimerBar(0);
                    e.target.style.opacity = 0;
                    e.target.style.cursor = 'initial';
                    e.target.disabled = true;
                };
            }}
        >
            {answer}
        </button>
    )
}

export default Answer;