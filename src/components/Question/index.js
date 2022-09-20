import React from "react";

function Question() {
    return (
        <div class="quiz" id="quiz">
            <p class="question">Which of the following is NOT a good reason for version control?</p>
            <div class="quizAnswers">
                <button class="questionAnswer">Version control allows the codebase to be modified and tested without interrupting the user experience</button>
                <button class="questionAnswer">Version control allows changes to the codebase to be tested individually</button>
                <button class="questionAnswer">Version control allows teams to work on individual features synchronously</button>
                <button class="questionAnswer">Version control allows features to ship directly to the main branch</button>
            </div>
        </div>
    )
};

export default Question;