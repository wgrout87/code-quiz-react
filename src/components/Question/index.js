import { useEffect } from "react";
import Answer from "../Answer";
import { useSiteContext } from "../../utils/GlobalState";
// This variable will hold an array of all answers for the current question in a randomized order
let answersArr = []

export default function Question() {
    const [state] = useSiteContext();

    // This useEffect hook randomizes the answers for the current question and stores them in the answersArr variable. It triggers again for each new question by having state.currentQuestion as a dependency
    useEffect(() => {
        answersArr = state.randomizeAnswers();
    }, [state.currentQuestion]);

    return (
        <div className="quiz" id="quiz" data-testid="question">
            <p className="question">{state.questions[state.quizQuestions[state.currentQuestion]].question}</p>
            <div className="quizAnswers">
                {
                    answersArr.map(answer => {
                        return (
                            <Answer
                                key={answer.answerString + state.currentQuestion}
                                // the answer prop will be the string to be displayed in the <button> element in the Answer component
                                answer={answer.answerString}
                                // the answerCorrect prop will be a boolean value that is used to determine if the answer chosen is correct or not
                                answerCorrect={answer.answerValue}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
};