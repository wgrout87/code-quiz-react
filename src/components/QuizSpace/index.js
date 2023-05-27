import React, { useState, useEffect } from "react";
import CurrentScore from "../CurrentScore";
import GameContent from "../GameContent";
import Instructions from '../Instructions';
import Question from "../Question";
import TimerBar from "../TimerBar";
import { questions } from "../../questions";
import GameOver from "../GameOver";
import HighScores from "../HighScores";
import { UPDATE_TIMELEFT, UPDATE_CURRENTCATEGORY } from "../../utils/actions";
import { useSiteContext } from "../../utils/GlobalState";

function QuizSpace() {
    const [state, dispatch] = useSiteContext();
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
    const [fullInitials, setFullInitials] = useState([]);

    function resetTimerBar(time) {
        setTimerBarWidth('100.00%');
        dispatch({
            type: UPDATE_TIMELEFT,
            timeLeft: time,
        });
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
    }, [timeRemaining, timerActive]);

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
            dispatch({
                type: UPDATE_CURRENTCATEGORY,
                currentCategory: "gameOver"
            });
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
                    {state.currentCategory === 'instructions' && <Instructions
                        questions={questions}
                        setVisibility={setVisibility}
                        setTimerActive={setTimerActive}
                    />}
                    {(state.currentCategory === 'quiz' && currentQuestion < 15) && <Question
                        questions={questions}
                        timeRemaining={timeRemaining}
                        setTimeRemaining={setTimeRemaining}
                        setTimerBarActive={setTimerBarActive}
                        setTimerBarWidth={setTimerBarWidth}
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
                    {state.currentCategory === 'gameOver' && <GameOver
                        score={score}
                        setCurrentQuestion={setCurrentQuestion}
                        setScore={setScore}
                        setTimeRemaining={setTimeRemaining}
                        setTimerActive={setTimerActive}
                        setUpdateTimer={setUpdateTimer}
                        fullInitials={fullInitials}
                        setFullInitials={setFullInitials}
                    />}
                    {state.currentCategory === 'highScores' && <HighScores
                        place={1}
                        fullInitials={fullInitials}
                        score={score}
                    />}
                </div>
                <TimerBar
                    key={timerBarKey}
                    visibility={visibility}
                    timerBarActive={timerBarActive}
                    timerBarWidth={timerBarWidth}
                    setTimerBarWidth={setTimerBarWidth}
                    timeLeft={timeLeft}
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