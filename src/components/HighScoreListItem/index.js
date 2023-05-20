import React from "react";

export default function HighScoreListItem({ place, fullInitials, score }) {
    return (
        <li className="highScoreListItem">
            <p>{`${place} ${fullInitials.toString()}`}</p>
            <p>{`${score}`}</p>
        </li>
    );
};