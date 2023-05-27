import React from "react";
import { useSiteContext } from "../../utils/GlobalState";

export default function Timer({ timeRemaining }) {
    const [state] = useSiteContext();
    return (
        <div className="timeRemaining">
            <p>TIME REMAINING: <br /><span id="timeRemaining">{state.timeRemaining}</span>
            </p>
        </div>
    )
}