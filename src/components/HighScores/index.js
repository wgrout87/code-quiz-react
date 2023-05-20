import React from "react";
import HighScoreListItem from "../HighScoreListItem";

export default function HighScores({ place, fullInitials, score }) {
    return (
        <>
            <h2 className="highScoreListTitle centered">High Scores</h2>
            <ol>
                <HighScoreListItem
                    place={place}
                    fullInitials={fullInitials}
                    score={score}
                />
            </ol>
        </>
    );
};