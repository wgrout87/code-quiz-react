import React, { useState, useEffect } from "react";
import CurrentScore from "../CurrentScore";
import GameContent from "../GameContent";
import Instructions from '../Instructions';
import TimerBar from "../TimerBar";

function QuizSpace() {
    const [currentCategory, setCurrentCategory] = useState('instructions');
    const [visibility, setVisibility] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(15);
    const [timerActive, setTimerActive] = useState(false);
    const [combo, setPointsCombo] = useState(0);
    const [pointsMultiplier, setPointsMultiplier] = useState(1);
    const [timerBarActive, setTimerBarActive] = useState(true);

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
                <TimerBar
                    visibility={visibility}
                    timerBarActive={timerBarActive}
                />
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