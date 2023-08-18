import React from "react";
import HighScoreListItem from "../HighScoreListItem";
import { useSiteContext } from "../../utils/GlobalState";
import { PLAY_AGAIN, UPDATE_UPDATETIMER } from "../../utils/actions";

export default function HighScores() {
    const [state, dispatch] = useSiteContext();

    return (
        <div data-testid="scoreboard">
            <h2 className="highScoreListTitle centered">High Scores</h2>
            <ol>
                {
                    state.highScores.map((highScoreObj, index) => {
                        return (
                            <HighScoreListItem
                                highScoreObj={highScoreObj}
                                place={index + 1}
                                key={highScoreObj.fullInitials + index}
                            />
                        )
                    })
                }
            </ol>
            <button
                data-id="playAgainBtn"
                className="centered high-scores-btn"
                onClick={() => {
                    dispatch({
                        type: PLAY_AGAIN,
                        currentCategory: "quiz",
                        timerActive: true,
                        visibility: 1
                    });
                    setTimeout(() => {
                        // If there is time remaining, the timer will be updated every second
                        dispatch({
                            type: UPDATE_UPDATETIMER,
                            updateTimer: true
                        })
                    }, 1000);
                }
                }>
                Play Again
            </button>
            <button
                data-id="instructionsBtn"
                className="centered high-scores-btn"
                onClick={() => {
                    dispatch({
                        type: PLAY_AGAIN,
                        currentCategory: "instructions",
                        visibility: 0
                    });
                }
                }
            >
                Instructions
            </button>
        </div>
    );
};