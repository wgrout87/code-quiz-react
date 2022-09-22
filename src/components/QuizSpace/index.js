import React, { useState, useEffect } from "react";
import CurrentScore from "../CurrentScore";
import GameContent from "../GameContent";
import Instructions from '../Instructions';
import Question from "../Question";
import TimerBar from "../TimerBar";

function QuizSpace() {
    const [currentCategory, setCurrentCategory] = useState('instructions');
    const [visibility, setVisibility] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(180);
    const [timerActive, setTimerActive] = useState(false);
    const [timerBarActive, setTimerBarActive] = useState(false);
    const [timerBarWidth, setTimerBarWidth] = useState('100.00%');
    // timeLeft refers to the time left on the timer bar for increased combos
    const [timeLeft, setTimeLeft] = useState(15);
    const [transition, setTransition] = useState('transition');
    const [combo, setCombo] = useState(0);
    const [pointsMultiplier, setPointsMultiplier] = useState(1);
    const [score, setScore] = useState(0);

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
            <div id="quizContent" className="transition">
                <CurrentScore
                    visibility={visibility}
                    score={score}
                />
                <div className="quizSpace">
                    {currentCategory === 'instructions' && <Instructions
                        setCurrentCategory={setCurrentCategory}
                        setVisibility={setVisibility}
                        setTimerActive={setTimerActive}
                    />}
                    {currentCategory === 'quiz' && <Question
                        setCurrentCategory={setCurrentCategory}
                        setTimerBarActive={setTimerBarActive}
                        setTimerBarWidth={setTimerBarWidth}
                        setTimeLeft={setTimeLeft}
                        setTransition={setTransition}
                        combo={combo}
                        setCombo={setCombo}
                        pointsMultiplier={pointsMultiplier}
                        setPointsMultiplier={setPointsMultiplier}
                        score={score}
                        setScore={setScore}
                    />}
                </div>
                <TimerBar
                    visibility={visibility}
                    timerBarActive={timerBarActive}
                    timerBarWidth={timerBarWidth}
                    setTimerBarWidth={setTimerBarWidth}
                    timeLeft={timeLeft}
                    setTimeLeft={setTimeLeft}
                    transition={transition}
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