import Answer from "../Answer";

function Question({
    quizQuestions,
    questions,
    timeRemaining,
    setTimeRemaining,
    setCurrentCategory,
    setTimerBarActive,
    combo,
    setCombo,
    pointsMultiplier,
    setPointsMultiplier,
    score,
    setScore,
    setCorrectAnswerGiven,
    timerBarKey,
    setTimerBarKey,
    currentQuestion,
    setCurrentQuestion,
    resetTimerBar
}) {

    return (
        <div className="quiz" id="quiz">
            <p className="question">{questions[quizQuestions[currentQuestion]].question}</p>
            <div className="quizAnswers">
                {
                    questions[quizQuestions[currentQuestion]].answers.map((answer, index) => {
                        return (
                            <Answer
                                key={answer.answerString + currentQuestion}
                                answer={answer.answerString}
                                answerCorrect={answer.answerValue}
                                currentQuestion={currentQuestion}
                                setCurrentQuestion={setCurrentQuestion}
                                timeRemaining={timeRemaining}
                                setTimeRemaining={setTimeRemaining}
                                resetTimerBar={resetTimerBar}
                                setTimerBarActive={setTimerBarActive}
                                combo={combo}
                                setCombo={setCombo}
                                pointsMultiplier={pointsMultiplier}
                                setPointsMultiplier={setPointsMultiplier}
                                score={score}
                                setScore={setScore}
                                setCurrentCategory={setCurrentCategory}
                                setCorrectAnswerGiven={setCorrectAnswerGiven}
                                timerBarKey={timerBarKey}
                                setTimerBarKey={setTimerBarKey}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Question;