import React from "react";
import HighScoreListItem from "../HighScoreListItem";

export default function HighScores({ place }) {
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