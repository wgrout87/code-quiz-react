import Answer from "../Answer";
import { useEffect } from "react";

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
    useEffect(() => console.log(quizQuestions), [quizQuestions]);

    function resetTimerBar(time) {
        setTimerBarWidth('100.00%');
        setTimeLeft(time);
    };

    return (
        <div className="quiz" id="quiz">
            <p className="question">{questions[quizQuestions[0]].question}</p>
            <div className="quizAnswers">
                {
                    questions[quizQuestions[0]].answers.map((answer, index) => {
                        return (
                            <Answer
                                key={index}
                                answer={answer.answerString}
                                answerCorrect={answer.answerValue}
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