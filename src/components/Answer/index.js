import React from "react";

function Answer({
    answer,
    answerCorrect,
    currentQuestion,
    setCurrentQuestion,
    timeRemaining,
    setTimeRemaining,
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
                    setTimeRemaining(Math.max(0, (timeRemaining - 10)));
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