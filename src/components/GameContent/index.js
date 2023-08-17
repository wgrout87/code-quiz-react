import React from "react";
import Timer from "../Timer";
import { useSiteContext } from "../../utils/GlobalState";

// This element contains the content to the right of the QuizSpace. It includes the timer, combo, and points multiplier boxes and only displays during an ongoing quiz
function GameContent() {
    const [state] = useSiteContext();

    return (
        // This element begins with visibility of zero - only displays during an ongoing quiz
        <div className="gameContent transition" id="gameContent" style={{ opacity: state.visibility }}>
            <Timer />
            <div>
                <p>
                    {/* combo is dynamically displayed */}
                    COMBO: <span id="currentCombo">{state.combo}</span>
                </p>
            </div>
            <div>
                <p>
                    {/* points multiplier is dynamically displayed */}
                    POINTS MULTIPLIER: <br /><span id="currentPointsMultiplier">{state.pointsMultiplier.toPrecision(2)}</span>
                </p>
            </div>
        </div>
    )
};

export default GameContent;