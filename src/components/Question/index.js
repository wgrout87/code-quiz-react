import React, { useState } from "react";

function Question() {
    const [answerValues, setAnswerValues] = useState([false, false, false, true])

    return (
        <div className="quiz" id="quiz">
            <p className="question">Which of the following is NOT a good reason for version control?</p>
            <div className="quizAnswers">
                <button
                    data-index={0}
                    className="questionAnswer"
                    onClick={(e) => {
                        console.log(answerValues[e.target.getAttribute('data-index')]);
                    }}
                >
                    Version control allows the codebase to be modified and tested without interrupting the user experience
                </button>
                <button
                    data-index={1}
                    className="questionAnswer"
                    onClick={(e) => {
                        console.log(answerValues[e.target.getAttribute('data-index')]);
                    }}
                >Version control allows changes to the codebase to be tested individually</button>
                <button
                    data-index={2}
                    className="questionAnswer"
                    onClick={(e) => {
                        console.log(answerValues[e.target.getAttribute('data-index')]);
                    }}
                >Version control allows teams to work on individual features synchronously</button>
                <button
                    data-index={3}
                    className="questionAnswer"
                    onClick={(e) => {
                        console.log(answerValues[e.target.getAttribute('data-index')]);
                    }}
                >Version control allows features to ship directly to the main branch</button>
            </div>
        </div>
    )
};

export default Question;