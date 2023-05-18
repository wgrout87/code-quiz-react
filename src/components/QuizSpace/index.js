import React, { useState, useEffect } from "react";
import CurrentScore from "../CurrentScore";
import GameContent from "../GameContent";
import Instructions from '../Instructions';
import Question from "../Question";
import TimerBar from "../TimerBar";
import { questions } from "../../questions";
import GameOver from "../GameOver";

function QuizSpace() {
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('instructions');
    const [visibility, setVisibility] = useState(0);
    // Set the timer here
    const [timeRemaining, setTimeRemaining] = useState(180);
    const [timerActive, setTimerActive] = useState(false);
    const [timerBarActive, setTimerBarActive] = useState(false);
    const [timerBarWidth, setTimerBarWidth] = useState('100.00%');
    // timeLeft refers to the time left on the timer bar for increased combos
    const [timeLeft, setTimeLeft] = useState(15);
    const [combo, setCombo] = useState(0);
    const [pointsMultiplier, setPointsMultiplier] = useState(1);
    const [score, setScore] = useState(0);
    const [correctAnswerGiven, setCorrectAnswerGiven] = useState(true);
    const [updateTimer, setUpdateTimer] = useState(false);
    const [timerBarKey, setTimerBarKey] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    function resetTimerBar(time) {
        setTimerBarWidth('100.00%');
        setTimeLeft(time);
    };

    // Updates the timer whenever timeRemaining changes
    useEffect(() => {
        if (timerActive && timeRemaining > 0) {
            // Won't start a new timeout when an incorrect answer is given and timeRemaining is changed
            if (correctAnswerGiven) {
                setTimeout(() => {
                    // If there is time remaining, the timer will be updated every second                
                    setUpdateTimer(true);

                    // If time has run out, the quiz is ended
                    // else {
                    //     endQuiz();
                    // }
                }, 1000);
            }
            else {
                setCorrectAnswerGiven(true);
            }
        }
    }, [currentCategory, timeRemaining, timerActive]);

    // Updates the timer using the current timeRemaining
    useEffect(() => {
        if (updateTimer) {
            setTimeRemaining(Math.max(0, (timeRemaining - 1)));
        }
        setUpdateTimer(false);
    }, [updateTimer]);

    useEffect(() => {
        if (timeLeft === 0) {
            setCombo(0);
            setPointsMultiplier(1);
        }
    }, [timeLeft]);

    useEffect(() => {
        if (timeRemaining === 0 || currentQuestion === 15) {
            setCurrentCategory('gameOver');
            setTimerBarActive(false);
            resetTimerBar(15);
            setTimerBarKey(timerBarKey + 1);
            setTimerActive(false);
        }
    }, [timeRemaining, currentQuestion]);

    return (
        <section>
            <div id="quizContent" className="transition">
                <CurrentScore
                    visibility={visibility}
                    score={score}
                />
                <div className="quizSpace">
                    {currentCategory === 'instructions' && <Instructions
                        questions={questions}
                        quizQuestions={quizQuestions}
                        setQuizQuestions={setQuizQuestions}
                        setCurrentCategory={setCurrentCategory}
                        setVisibility={setVisibility}
                        setTimerActive={setTimerActive}
                    />}
                    {(currentCategory === 'quiz' && currentQuestion < 15) && <Question
                        quizQuestions={quizQuestions}
                        questions={questions}
                        timeRemaining={timeRemaining}
                        setTimeRemaining={setTimeRemaining}
                        setCurrentCategory={setCurrentCategory}
                        setTimerBarActive={setTimerBarActive}
                        setTimerBarWidth={setTimerBarWidth}
                        setTimeLeft={setTimeLeft}
                        combo={combo}
                        setCombo={setCombo}
                        pointsMultiplier={pointsMultiplier}
                        setPointsMultiplier={setPointsMultiplier}
                        score={score}
                        setScore={setScore}
                        setCorrectAnswerGiven={setCorrectAnswerGiven}
                        timerBarKey={timerBarKey}
                        setTimerBarKey={setTimerBarKey}
                        currentQuestion={currentQuestion}
                        setCurrentQuestion={setCurrentQuestion}
                        resetTimerBar={resetTimerBar}
                    />}
                    {currentCategory === 'gameOver' && <GameOver
                        score={score}
                        setCurrentCategory={setCurrentCategory}
                        setCurrentQuestion={setCurrentQuestion}
                        setScore={setScore}
                        setTimeRemaining={setTimeRemaining}
                        setTimerActive={setTimerActive}
                        setUpdateTimer={setUpdateTimer}
                    />}
                </div>
                <TimerBar
                    key={timerBarKey}
                    visibility={visibility}
                    timerBarActive={timerBarActive}
                    timerBarWidth={timerBarWidth}
                    setTimerBarWidth={setTimerBarWidth}
                    timeLeft={timeLeft}
                    setTimeLeft={setTimeLeft}
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