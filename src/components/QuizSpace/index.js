import React, { useState } from "react";
import CurrentScore from "../CurrentScore";
import GameContent from "../GameContent";
import Instructions from '../Instructions';

function QuizSpace() {
    const [currentCategory, setCurrentCategory] = useState('instructions');
    const [visibility, setVisibility] = useState(0);
    return (
        <section>
            <div id="quizContent">
                <CurrentScore visibility={visibility} />
                <div class="quizSpace">
                    {currentCategory === 'instructions' && <Instructions
                        setCurrentCategory={setCurrentCategory}
                        setVisibility={setVisibility}
                    />}
                </div>
                <div id="timerBar" style={{ opacity: visibility }}></div>
            </div>
            <GameContent visibility={visibility} />
        </section>
    )
}

export default QuizSpace;