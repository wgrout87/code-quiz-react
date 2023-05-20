import React from "react";
import HighScoreListItem from "../HighScoreListItem";

export default function HighScores({ place, initials, score }) {
    return (
        <>
            <h2 class="highScoreListTitle centered">High Scores</h2>
            <ol>
                <HighScoreListItem
                    place={place}
                    initials={initials}
                    score={score}
                />
            </ol>
        </>
    );
};