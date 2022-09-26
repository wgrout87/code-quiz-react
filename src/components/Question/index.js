import React, { useState } from "react";
import Answer from "../Answer";

function Question({
    question,
    answers,
    setCurrentCategory,
    setTimerBarActive,
    setTimerBarWidth,
    setTimeLeft,
    combo,
    setCombo,
    pointsMultiplier,
    setPointsMultiplier,
    score,
    setScore
}) {
    const [answerValues, setAnswerValues] = useState([false, false, false, true])
    function resetTimerBar(time) {
        setTimerBarWidth('100.00%');
        setTimeLeft(time);
    };

    return (
        <div className="quiz" id="quiz">
            <p className="question">{question}</p>
            <div className="quizAnswers">
                {
                    answers.map((answer, index) => {
                        return (
                            <Answer
                                key={index}
                                answer={answer.value}
                                answerCorrect={answer.correct}
                                resetTimerBar={resetTimerBar}
                                setTimerBarActive={setTimerBarActive}
                                combo={combo}
                                setCombo={setCombo}
                                pointsMultiplier={pointsMultiplier}
                                setPointsMultiplier={setPointsMultiplier}
                                score={score}
                                setScore={setScore}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Question;