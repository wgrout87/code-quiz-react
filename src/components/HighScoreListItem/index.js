import React from "react";
import { useSiteContext } from "../../utils/GlobalState";

export default function HighScoreListItem({ place }) {
    const [state] = useSiteContext();

    return (
        <li className="highScoreListItem">
            <p>{`${place.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}. ${state.fullInitials.toString().replaceAll(",", "")}`}</p>
            <p>{`${state.score}`}</p>
        </li>
    );
};