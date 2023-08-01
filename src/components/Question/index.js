import Answer from "../Answer";
import { useSiteContext } from "../../utils/GlobalState";

export default function Question() {
    const [state, dispatch] = useSiteContext();

    return (
        <div className="quiz" id="quiz">
            <p className="question">{state.questions[state.quizQuestions[state.currentQuestion]].question}</p>
            <div className="quizAnswers">
                {
                    state.questions[state.quizQuestions[state.currentQuestion]].answers.map((answer, index) => {
                        return (
                            <Answer
                                key={answer.answerString + state.currentQuestion}
                                answer={answer.answerString}
                                answerCorrect={answer.answerValue}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
};