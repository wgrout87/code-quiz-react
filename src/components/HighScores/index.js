import React, { useEffect} from "react";
import HighScoreListItem from "../HighScoreListItem";
import { saveHighScores } from "../../utils/highScores";
import { useSiteContext } from "../../utils/GlobalState";

export default function HighScores({ place }) {
    const [state] = useSiteContext();

    // This useEffect hook looks for changes to the highScores property of the Global State and saves the high scores locally whenever new high scores are achieved.
    useEffect(() => {
        console.log(state.highScores);
        saveHighScores(state.highScores);
    }, [state.highScores]);

    return (
        <div>
            <h2 className="highScoreListTitle centered">High Scores</h2>
            <ol>
                <HighScoreListItem
                    place={place}
                />
            </ol>
        </div>
    );
};