import React, { useEffect } from "react";
import CurrentScore from "../CurrentScore";
import GameContent from "../GameContent";
import Instructions from '../Instructions';
import Question from "../Question";
import TimerBar from "../TimerBar";
import GameOver from "../GameOver";
import HighScores from "../HighScores";
import {
    UPDATE_QUIZQUESTIONS,
    UPDATE_TIMEREMAINING,
    UPDATE_CORRECTANSWERGIVEN,
    UPDATE_UPDATETIMER,
    UPDATE_HIGHSCORES,
    COMBO_TIMER_DOWN,
    GAME_OVER
} from "../../utils/actions";
import { useSiteContext } from "../../utils/GlobalState";
import { retrieveHighScores } from "../../utils/highScores";

function QuizSpace() {
    const [state, dispatch] = useSiteContext();
    // This useEffect will randomize questions to be asked on initial load and every time currentCategory changes, so new quizzes will have fresh questions
    useEffect(() => {
        const quizQuestions = [];
        while (quizQuestions.length < 15) {
            let possibleQuestion = Math.floor(Math.random() * state.questions.length);

            if (quizQuestions.indexOf(possibleQuestion) === -1) {
                quizQuestions.push(possibleQuestion)
                dispatch({
                    type: UPDATE_QUIZQUESTIONS,
                    quizQuestions: quizQuestions
                });
            }
        }
    }, [state.currentCategory]);

    useEffect(() => {
        const currentHighScores = retrieveHighScores();
        dispatch({
            type: UPDATE_HIGHSCORES,
            highScores: currentHighScores
        });
    }, []);

    // Updates the timer whenever timeRemaining changes
    useEffect(() => {
        if (state.timerActive && state.timeRemaining > 0) {
            // Won't start a new timeout when an incorrect answer is given and timeRemaining is changed - this is to handle time deductions for incorrect answers
            if (state.correctAnswerGiven) {
                setTimeout(() => {
                    // If there is time remaining, the timer will be updated every second
                    dispatch({
                        type: UPDATE_UPDATETIMER,
                        updateTimer: true
                    })
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
        // A second will be subtracted from the current time remaining every time updateTimer is set to true
        if (state.updateTimer) {
            dispatch({
                type: UPDATE_TIMEREMAINING,
                timeRemaining: Math.max(0, (state.timeRemaining - 1)),
            });
        }
        // After the timer has been updated, updateTimer is set to false again
        dispatch({
            type: UPDATE_UPDATETIMER,
            updateTimer: false
        })
    }, [state.updateTimer]);

    useEffect(() => {
        if (state.timeLeft === 0) {
            dispatch({
                type: COMBO_TIMER_DOWN,
                combo: 0,
                pointsMultiplier: 1,
            });
        }
    }, [state.timeLeft]);

    useEffect(() => {
        if (state.timeRemaining === 0 || state.currentQuestion === 15) {
            dispatch({
                type: GAME_OVER,
                currentCategory: "gameOver",
                visibility: 0,
                timerBarActive: false,
                timerBarKey: state.timerBarKey + 1,
                timerActive: false,
            });
        }
    }, [state.timeRemaining, state.currentQuestion]);

    return (
        <section>
            <div id="quizContent" className="transition">
                <CurrentScore
                    score={state.score}
                />
                <div className="quizSpace">
                    {state.currentCategory === 'instructions' && <Instructions />}
                    {(state.currentCategory === 'quiz' && state.currentQuestion < 15) && <Question />}
                    {state.currentCategory === 'gameOver' && <GameOver />}
                    {state.currentCategory === 'highScores' && <HighScores />}
                </div>
                <TimerBar />
            </div>
            <GameContent />
        </section>
    )
}

export default QuizSpace;