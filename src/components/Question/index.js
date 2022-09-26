import React, { useState } from "react";

function Question({
    setCurrentCategory,
    setTimerBarActive,
    setTimerBarWidth,
    setTimeLeft,
    setTransition,
    combo,
    setCombo,
    pointsMultiplier,
    setPointsMultiplier,
    score,
    setScore
}) {
    const [answerValues, setAnswerValues] = useState([false, false, false, true])
    function resetTimerBar(time) {
        setTransition('tansition-none');
        setTimerBarWidth('100.00%');
        setTimeLeft(time);
    };

    return (
        <div className="quiz" id="quiz">
            <p className="question">Which of the following is NOT a good reason for version control?</p>
            <div className="quizAnswers">
                <button
                    data-index={0}
                    className="questionAnswer"
                    onClick={(e) => {
                        if (answerValues[e.target.getAttribute('data-index')]) {
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
                    }}
                >
                    Version control allows the codebase to be modified and tested without interrupting the user experience
                </button>
                <button
                    data-index={1}
                    className="questionAnswer"
                    onClick={(e) => {
                        if (answerValues[e.target.getAttribute('data-index')]) {
                            setTimerBarActive(false);
                            setCombo(combo + 1);
                            setPointsMultiplier(pointsMultiplier + .1);
                            setScore(score + (1000 * pointsMultiplier));
                            resetTimerBar(15);
                            setTimerBarActive(true);
                        } else {
                            setTimerBarActive(false);
                            setCombo(0);
                            setPointsMultiplier(1);
                            resetTimerBar(0)
                        };
                    }}
                >Version control allows changes to the codebase to be tested individually</button>
                <button
                    data-index={2}
                    className="questionAnswer"
                    onClick={(e) => {
                        if (answerValues[e.target.getAttribute('data-index')]) {
                            setTimerBarActive(false);
                            setCombo(combo + 1);
                            setPointsMultiplier(pointsMultiplier + .1);
                            setScore(score + (1000 * pointsMultiplier));
                            resetTimerBar(15);
                            setTimerBarActive(true);
                        } else {
                            setTimerBarActive(false);
                            setCombo(0);
                            setPointsMultiplier(1);
                            resetTimerBar(0)
                        };
                    }}
                >Version control allows teams to work on individual features synchronously</button>
                <button
                    data-index={3}
                    className="questionAnswer"
                    onClick={(e) => {
                        if (answerValues[e.target.getAttribute('data-index')]) {
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
                >Version control allows features to ship directly to the main branch</button>
            </div>
        </div>
    )
};

export default Question;