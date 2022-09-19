import React, { useState, useEffect } from "react";
import CurrentScore from "../CurrentScore";
import GameContent from "../GameContent";
import Instructions from '../Instructions';

function QuizSpace() {
    let timerIntervalID;
    const [currentCategory, setCurrentCategory] = useState('instructions');
    const [visibility, setVisibility] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(10);
    const [timerActive, setTimerActive] = useState(false);
    const [combo, setPointsCombo] = useState(0);
    const [pointsMultiplier, setPointsMultiplier] = useState(1);

    function beginTimer() {
        timerIntervalID = setInterval(() => {
            // If there is time remaining, the timer will be updated every second
            if (timeRemaining > 0) {
                setTimeRemaining(timeRemaining - 1);
            }

            // If time has run out, the quiz is ended
            // else {
            //     endQuiz();
            // }
        }, 1000)
    };

    useEffect(() => {
        if (timerActive && timeRemaining > 0) {
            setTimeout(() => {
                // If there is time remaining, the timer will be updated every second                
                setTimeRemaining(timeRemaining - 1);

                // If time has run out, the quiz is ended
                // else {
                //     endQuiz();
                // }
            }, 1000);
        };
    }, [currentCategory, timeRemaining, timerActive]);

    // currentCategory === 'quiz' && runTimer();

    return (
        <section>
            <div id="quizContent">
                <CurrentScore visibility={visibility} />
                <div className="quizSpace">
                    {currentCategory === 'instructions' && <Instructions
                        setCurrentCategory={setCurrentCategory}
                        setVisibility={setVisibility}
                        setTimerActive={setTimerActive}
                    />}
                </div>
                <div id="timerBar" style={{ opacity: visibility }}></div>
            </div>
            <GameContent
                visibility={visibility}
                timeRemaining={timeRemaining}
                combo={combo}
                pointsMultiplier={pointsMultiplier}
            />
        </section>
    )
}

export default QuizSpace;