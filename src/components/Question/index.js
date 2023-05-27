import Answer from "../Answer";
import { useSiteContext } from "../../utils/GlobalState";

export default function Question({
    questions,
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
    const [state, dispatch] = useSiteContext();

    return (
        <div className="quiz" id="quiz">
            <p className="question">{state.questions[state.quizQuestions[currentQuestion]].question}</p>
            <div className="quizAnswers">
                {
                    questions[state.quizQuestions[currentQuestion]].answers.map((answer, index) => {
                        return (
                            <Answer
                                key={answer.answerString + currentQuestion}
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