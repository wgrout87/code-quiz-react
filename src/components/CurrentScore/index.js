import React from "react";
import { useSiteContext } from "../../utils/GlobalState";

function CurrentScore() {
    const [state] = useSiteContext();
    return (
        <div className="score transition" id="score" style={{ opacity: state.visibility }}>
            <p>CURRENT SCORE:</p>
            <p id="currentScore">{state.score}</p>
        </div>
    )
};

export default CurrentScore;