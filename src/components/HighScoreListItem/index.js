import React from "react";
import { useSiteContext } from "../../utils/GlobalState";

export default function HighScoreListItem({ place, fullInitials }) {
    const [state] = useSiteContext();

    return (
        <li className="highScoreListItem">
            <p>{`${place} ${fullInitials.toString().replaceAll(",", "")}`}</p>
            <p>{`${state.score}`}</p>
        </li>
    );
};