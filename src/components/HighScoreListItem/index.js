import React from "react";

export default function HighScoreListItem({ highScoreObj, place }) {
    return (
        <li className="highScoreListItem">
            <p>{`${place.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}. ${highScoreObj.fullInitials.toString().replaceAll(",", "")}`}</p>
            <p>{`${highScoreObj.score}`}</p>
        </li>
    );
};