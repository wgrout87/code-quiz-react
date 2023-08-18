import React from "react";

export default function HighScoreListItem({ highScoreObj, place }) {
    const initials = highScoreObj.fullInitials.toString().replaceAll(",", "");
    return (
        <li className="highScoreListItem" data-testid={initials}>
            <p>{`${place.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}. ${initials}`}</p>
            <p>{`${highScoreObj.score}`}</p>
        </li>
    );
};