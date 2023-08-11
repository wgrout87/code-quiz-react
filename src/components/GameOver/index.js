import React, { useEffect, useState } from "react";
import { UPDATE_CURRENTCATEGORY, UPDATE_CURRENTQUESTION, UPDATE_FULLINITIALS, UPDATE_HIGHSCORES, UPDATE_SCORE, UPDATE_TIMERACTIVE, UPDATE_TIMEREMAINING, UPDATE_UPDATETIMER } from "../../utils/actions";
import { useSiteContext } from "../../utils/GlobalState";
import { defaultSettings } from "../../utils/defaultSettings";
import { determineNewHighScore } from "../../utils/highScores";

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function GameOver() {
    const [state, dispatch] = useSiteContext();
    const [initial, setInitial] = useState(0);
    const [clearIntervalID, setClearIntervalID] = useState(0);
    const [removeBlink, setRemoveBlink] = useState();
    const [newHighScore, setNewHighScore] = useState(false);

    // Whenever the GameOver component is loaded, this useEffect hook will trigger to determine whether a new high score was achieved or not. This will dynamically impact what content the component displays.
    useEffect(() => {
        const newHighScorePosition = determineNewHighScore(state.highScores, state.score);
        (newHighScorePosition < 10) ? setNewHighScore(true) : setNewHighScore(false);
    }, []);

    // This useEffect hook handles the blinking cursor for initials entry.
    useEffect(() => {
        if (state.score > 0 && newHighScore) {
            if (initial > 0) {
                clearInterval(clearIntervalID);
                removeBlink.classList.remove('blink');
            }
            if (initial < 3) {
                let cursor = document.querySelector(`.initials :nth-child(${initial + 1})`);
                setRemoveBlink(cursor);
                let interval = setInterval(() => cursor.classList.toggle("blink"), 400);
                setClearIntervalID(interval);
            }
        }
    }, [initial, newHighScore]);

    // This useEffect hook looks for changes to the fullInitials property of the Global State and updates the highScores property with an updated array after initials have been entered.
    useEffect(() => {
        if (state.fullInitials.length === 3) {
            let newHighScoresArray;
            const newHighScorePosition = determineNewHighScore(state.highScores, state.score);
            if (newHighScorePosition < 10) {
                newHighScoresArray = [...state.highScores];
                newHighScoresArray.splice(newHighScorePosition, 0, {fullInitials: state.fullInitials, score: state.score});
                dispatch({
                    type: UPDATE_HIGHSCORES,
                    highScores: newHighScoresArray
                })
            }
            dispatch({
                type: UPDATE_CURRENTCATEGORY,
                currentCategory: "highScores"
            });
        }
    }, [state.fullInitials]);

    return (
        <div>
            <h2 className="results">
                You scored {state.score} points!
            </h2>
            {state.score > 0 && newHighScore ?
                <div>
                    <p className="results">
                        New high score!
                    </p>
                    <div className="initials centered">
                        <div className={initial === 0 ? "blink" : ""}>{state.fullInitials[0]}</div>
                        <div>{state.fullInitials[1]}</div>
                        <div>{state.fullInitials[2]}</div>
                    </div>
                    <h2 className="results">
                        Please enter your initials:
                    </h2>
                    <div className="btnDiv centered">
                        {letters.map((letter, index) => <button
                            className="charBtn"
                            key={index}
                            onClick={() => {
                                if (initial <= 2) {
                                    dispatch({
                                        type: UPDATE_FULLINITIALS,
                                        fullInitials: [...state.fullInitials, letter]
                                    })
                                    setInitial(initial + 1)
                                }
                            }}
                        >
                            {letter}
                        </button>)}
                    </div>
                </div>
                :
                <div className="playAgainPrompt centered">
                    <h2>Would you like to play again?</h2>
                    <div className="promptButtons">
                        <button
                            className="charBtn"
                            onClick={() => {
                                dispatch({
                                    type: UPDATE_CURRENTQUESTION,
                                    currentQuestion: 0
                                })
                                dispatch({
                                    type: UPDATE_CURRENTCATEGORY,
                                    currentCategory: "quiz"
                                });
                                dispatch({
                                    type: UPDATE_SCORE,
                                    score: defaultSettings.score
                                })
                                // Set the timer here
                                dispatch({
                                    type: UPDATE_TIMEREMAINING,
                                    timeRemaining: defaultSettings.timeRemaining,
                                });
                                dispatch({
                                    type: UPDATE_TIMERACTIVE,
                                    timerActive: true,
                                });
                                setTimeout(() => {
                                    // If there is time remaining, the timer will be updated every second
                                    dispatch({
                                        type: UPDATE_UPDATETIMER,
                                        updateTimer: true
                                    })
                                }, 1000);
                            }
                            }
                        >
                            Y
                        </button>
                        <div className="btnBetween">/</div>
                        <button className="charBtn">N</button>
                    </div>
                </div>}
        </div>
    )
}

export default GameOver;