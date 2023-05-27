import React from "react";
import Timer from "../Timer";
import { useSiteContext } from "../../utils/GlobalState";

function GameContent({ timeRemaining }) {
    const [state, dispatch] = useSiteContext();

    // console.log(state);
    return (
        <div className="gameContent transition" id="gameContent" style={{ opacity: state.visibility }}>
            <Timer
                timeRemaining={timeRemaining}
            />
            <div>
                <p>
                    COMBO: <span id="currentCombo">{state.combo}</span>
                </p>
            </div>
            <div>
                <p>
                    POINTS MULTIPLIER: <br /><span id="currentPointsMultiplier">{state.pointsMultiplier.toPrecision(2)}</span>
                </p>
            </div>
        </div>
    )
};

export default GameContent;