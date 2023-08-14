import React, { useEffect } from "react";
import HighScoreListItem from "../HighScoreListItem";
import { saveHighScores } from "../../utils/highScores";
import { useSiteContext } from "../../utils/GlobalState";
import { PLAY_AGAIN, UPDATE_UPDATETIMER } from "../../utils/actions";

export default function HighScores() {
    const [state, dispatch] = useSiteContext();

    // This useEffect hook looks for changes to the highScores property of the Global State and saves the high scores locally whenever new high scores are achieved.
    useEffect(() => {
        saveHighScores(state.highScores);
    }, [state.highScores]);

    return (
        <div>
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