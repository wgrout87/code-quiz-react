import React, { useState } from "react";
import Instructions from '../Instructions';

function QuizSpace() {
    const [currentCategory, setCurrentCategory] = useState('instructions');
    return (
        <section>
            <div id="quizContent">
                <div class="score" id="score">
                    <p>CURRENT SCORE:</p>
                    <p id="currentScore"></p>
                </div>
                <div class="quizSpace">
                    {currentCategory === 'instructions' && <Instructions setCurrentCategory={setCurrentCategory} />}
                </div>
                <div id="timerBar"></div>
            </div>
            <div class="gameContent" id="gameContent">
                <div class="timeRemaining">
                    <p>TIME REMAINING: <br /><span id="timeRemaining"></span>
                    </p>
                </div>
                <div>
                    <p>
                        COMBO: <span id="currentCombo"></span>
                    </p>
                </div>
                <div>
                    <p>
                        POINTS MULTIPLIER: <br /><span id="currentPointsMultiplier"></span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default QuizSpace;