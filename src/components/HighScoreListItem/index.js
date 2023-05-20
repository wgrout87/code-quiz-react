import React from "react";

export default function HighScoreListItem({ place, initials, score }) {
    return (
        <li className="highScoreListItem">
            <p>{`${place} ${initials}`}</p>
            <p>{`${score}`}</p>
        </li>
    );
};