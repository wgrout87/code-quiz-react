import React, { useEffect, useState } from "react";
import { PLAY_AGAIN, UPDATE_CURRENTCATEGORY, UPDATE_FULLINITIALS, UPDATE_HIGHSCORES, UPDATE_UPDATETIMER } from "../../utils/actions";
import { useSiteContext } from "../../utils/GlobalState";
import { determineNewHighScore, saveHighScores } from "../../utils/highScores";

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function GameOver() {
    const [state, dispatch] = useSiteContext();
    const [initial, setInitial] = useState(0);
    const [clearIntervalID, setClearIntervalID] = useState(0);
    const [removeBlink, setRemoveBlink] = useState();
    const [newHighScore, setNewHighScore] = useState(false);

    // Whenever the GameOver component is loaded, this useEffect hook will trigger to determine whether a new high score was achieved or not. This will dynamically impact what content the component displays.
    useEffect(() => {
        if (state.currentCategory === 'gameOver') {
            const newHighScorePosition = determineNewHighScore(state.highScores, state.score);
            (newHighScorePosition < 10) ? setNewHighScore(true) : setNewHighScore(false);
        }
    }, [state.currentCategory]);

    // This useEffect hook handles the blinking cursor for initials entry. It triggers initially when newHighScore is set to true in the above hook and subsequently when initial is incremented whenever a letter button is pressed
    useEffect(() => {
        // The blinking cursor will only begin if a new high score was achieved
        if (state.score > 0 && newHighScore) {
            // initial begins at zero, so this will only trigger after an initial is selected. The blinking interval will be canceled and the class adding a border bottom removed
            if (initial > 0) {
                clearInterval(clearIntervalID);
                removeBlink.classList.remove('blink');
            }
            // Whenever initial is less than 3 - after the third initial is selected, no further blinking intervals will be initiated
            if (initial < 3) {
                // The initial div is selected starting with the 1st child (initial will start at a value of zero)
                let cursor = document.querySelector(`.initials :nth-child(${initial + 1})`);
                // The element that will need to have the blink class removed later is set
                setRemoveBlink(cursor);
                // An interval is started to blink the cursor
                let interval = setInterval(() => cursor.classList.toggle("blink"), 400);
                // The interval ID is stored in the clearIntervalID state
                setClearIntervalID(interval);
            }
        }
    }, [initial, newHighScore]);

    // This useEffect hook looks for changes to the fullInitials property of the Global State and updates the highScores property with an updated array after initials have been entered.
    useEffect(() => {
        // While this hook will trigger every time the fullInitials array is changed, the following logic will only happen once all 3 initials have been added
        if (state.fullInitials.length === 3) {
            // This variable will become a temporary array that can be modified to include new high scores and then dispatched to the Global State
            let newHighScoresArray;
            // The place of the new high score is determined and stored in this variable - possible values that would achieve a new high score are 0-9
            const newHighScorePosition = determineNewHighScore(state.highScores, state.score);
            // If the place of the new high score is less than 10, a new high score has been achieved
            if (newHighScorePosition < 10) {
                // The current high scores array is saved to this temporary variable
                newHighScoresArray = [...state.highScores];
                // An object containing the fullInitials and score is put into the array in its proper place
                newHighScoresArray.splice(newHighScorePosition, 0, { fullInitials: state.fullInitials, score: state.score });
                // After adding the new high score, if the temporary array of high scores has more than 10 high score objects, the later ones will be removed
                while (newHighScoresArray.length > 10) {
                    newHighScoresArray.pop();
                }
                // The new high scores array is dispatched to the Global State
                dispatch({
                    type: UPDATE_HIGHSCORES,
                    highScores: newHighScoresArray
                })
            }
            // The new high scores array is saved to local storage
            saveHighScores(newHighScoresArray);
            // the current category is changed to "highScores" to display the high scores screen
            dispatch({
                type: UPDATE_CURRENTCATEGORY,
                currentCategory: "highScores"
            });
        }
    }, [state.fullInitials]);

    return (
        <div data-testid="gameOver">
            <h2 className="results">
                You scored {state.score} points!
            </h2>
            {state.score > 0 && newHighScore ?
                // This content will display if a new high score was achieved
                <div>
                    <p className="results">
                        New high score!
                    </p>
                    {/* Three spaces for initials entry */}
                    <div className="initials centered">
                        {/* The first element will begin with a blinking border since initials starts at 0, but won't be redrawn with it later after initials is incremented */}
                        <div className={initial === 0 ? "blink" : ""}>{state.fullInitials[0]}</div>
                        <div>{state.fullInitials[1]}</div>
                        <div>{state.fullInitials[2]}</div>
                    </div>
                    <h2 className="results">
                        Please enter your initials:
                    </h2>
                    <div className="btnDiv centered">
                        {/* A button is created for each letter in the alphabet */}
                        {letters.map((letter, index) => <button
                            className="charBtn"
                            key={index}
                            data-testid="charBtn"
                            onClick={() => {
                                // if all 3 initials haven't been entered yet
                                if (initial < 3) {
                                    // the Global State is updated with the entered initials
                                    dispatch({
                                        type: UPDATE_FULLINITIALS,
                                        fullInitials: [...state.fullInitials, letter]
                                    })
                                    // the initial variable is incremented
                                    setInitial(initial + 1)
                                }
                            }}
                        >
                            {letter}
                        </button>)}
                    </div>
                </div>
                :
                // The following will display if the player did not achieve a new high score
                <div className="playAgainPrompt centered">
                    <h2>Would you like to play again?</h2>
                    <div className="promptButtons">
                        {/* Button to take another quiz */}
                        <button
                            className="charBtn"
                            onClick={() => {
                                dispatch({
                                    type: PLAY_AGAIN,
                                    // current category is set to quiz to begin a new quiz
                                    currentCategory: "quiz",
                                    // The timer is activated
                                    timerActive: true,
                                    // The game elements are rendered visible again for the next quiz
                                    visibility: 1
                                });
                                setTimeout(() => {
                                    // The timer begins to countdown - a useEffect hook in the QuizSpace is activated everytime updateTimer is changed and will subtract one second from the time remaining every time updateTimer is set to true
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
                        {/* Button to not take another quiz */}
                        <button className="charBtn"
                            onClick={() => {
                                dispatch({
                                    type: PLAY_AGAIN,
                                    // The current category is set to instructions to display the quiz instructions again
                                    currentCategory: "instructions",
                                    // Visibility for the game elements is maintained at zero
                                    visibility: 0
                                });
                            }
                            }
                        >
                            N
                        </button>
                    </div>
                </div>}
        </div>
    )
}

export default GameOver;