import Answer from "../Answer";
import { useState } from "react";

function Question({
    quizQuestions,
    questions,
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
    const [currentQuestion, setCurrentQuestion] = useState(0);

    function resetTimerBar(time) {
        setTimerBarWidth('100.00%');
        setTimeLeft(time);
    };

    return (
        <div className="quiz" id="quiz">
            <p className="question">{questions[quizQuestions[currentQuestion]].question}</p>
            <div className="quizAnswers">
                {
                    questions[quizQuestions[currentQuestion]].answers.map((answer, index) => {
                        return (
                            <Answer
                                key={index}
                                answer={answer.answerString}
                                answerCorrect={answer.answerValue}
                                currentQuestion={currentQuestion}
                                setCurrentQuestion={setCurrentQuestion}
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