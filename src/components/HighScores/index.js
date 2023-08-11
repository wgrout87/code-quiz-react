import React, { useEffect } from "react";
import HighScoreListItem from "../HighScoreListItem";
import { saveHighScores } from "../../utils/highScores";
import { useSiteContext } from "../../utils/GlobalState";

export default function HighScores({ place }) {
    const [state] = useSiteContext();

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
        </div>
    );
};