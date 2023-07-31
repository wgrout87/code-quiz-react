import React, { useState, useEffect } from "react";
import CurrentScore from "../CurrentScore";
import GameContent from "../GameContent";
import Instructions from '../Instructions';
import Question from "../Question";
import TimerBar from "../TimerBar";
import { questions } from "../../questions";
import GameOver from "../GameOver";
import HighScores from "../HighScores";
import {
    UPDATE_TIMELEFT,
    UPDATE_CURRENTCATEGORY,
    UPDATE_TIMEREMAINING,
    UPDATE_TIMERACTIVE,
    UPDATE_COMBO,
    UPDATE_TIMERBARWIDTH,
    UPDATE_POINTSMULTIPLIER,
    UPDATE_CORRECTANSWERGIVEN
} from "../../utils/actions";
import { useSiteContext } from "../../utils/GlobalState";

function QuizSpace() {
    const [state, dispatch] = useSiteContext();
    const [timerBarActive, setTimerBarActive] = useState(false);
    const [updateTimer, setUpdateTimer] = useState(false);
    const [timerBarKey, setTimerBarKey] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [fullInitials, setFullInitials] = useState([]);

    function resetTimerBar(time) {
        dispatch({
            type: UPDATE_TIMERBARWIDTH,
            timerBarWidth: '100.00%'
        });
        dispatch({
            type: UPDATE_TIMELEFT,
            timeLeft: time,
        });
    };

    // Updates the timer whenever timeRemaining changes
    useEffect(() => {
        if (state.timerActive && state.timeRemaining > 0) {
            // Won't start a new timeout when an incorrect answer is given and timeRemaining is changed
            if (state.correctAnswerGiven) {
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
                dispatch({
                    type: UPDATE_CORRECTANSWERGIVEN,
                    correctAnswerGiven: true
                })
            }
        }
    }, [state.timeRemaining, state.timerActive]);

    // Updates the timer using the current timeRemaining
    useEffect(() => {
        if (updateTimer) {
            dispatch({
                type: UPDATE_TIMEREMAINING,
                timeRemaining: Math.max(0, (state.timeRemaining - 1)),
            });
        }
        setUpdateTimer(false);
    }, [updateTimer]);

    useEffect(() => {
        if (state.timeLeft === 0) {
            dispatch({
                type: UPDATE_COMBO,
                combo: 0,
            });
            dispatch({
                type: UPDATE_POINTSMULTIPLIER,
                pointsMultiplier: 1,
            });
        }
    }, [state.timeLeft]);

    useEffect(() => {
        if (state.timeRemaining === 0 || currentQuestion === 15) {
            dispatch({
                type: UPDATE_CURRENTCATEGORY,
                currentCategory: "gameOver"
            });
            setTimerBarActive(false);
            resetTimerBar(15);
            setTimerBarKey(timerBarKey + 1);
            dispatch({
                type: UPDATE_TIMERACTIVE,
                timerActive: false,
            });
        }
    }, [state.timeRemaining, currentQuestion]);

    return (
        <section>
            <div id="quizContent" className="transition">
                <CurrentScore
                    score={state.score}
                />
                <div className="quizSpace">
                    {state.currentCategory === 'instructions' && <Instructions />}
                    {(state.currentCategory === 'quiz' && currentQuestion < 15) && <Question
                        questions={questions}
                        setTimerBarActive={setTimerBarActive}
                        timerBarKey={timerBarKey}
                        setTimerBarKey={setTimerBarKey}
                        currentQuestion={currentQuestion}
                        setCurrentQuestion={setCurrentQuestion}
                        resetTimerBar={resetTimerBar}
                    />}
                    {state.currentCategory === 'gameOver' && <GameOver
                        setCurrentQuestion={setCurrentQuestion}
                        setUpdateTimer={setUpdateTimer}
                        fullInitials={fullInitials}
                        setFullInitials={setFullInitials}
                    />}
                    {state.currentCategory === 'highScores' && <HighScores
                        place={1}
                        fullInitials={fullInitials}
                    />}
                </div>
                <TimerBar
                    key={timerBarKey}
                    timerBarActive={timerBarActive}
                />
            </div>
            <GameContent />
        </section>
    )
}

export default QuizSpace;