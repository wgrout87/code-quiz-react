import React from "react";
import Timer from "../Timer";

function GameContent({ visibility, timeRemaining, combo, pointsMultiplier }) {
    return (
        <div className="gameContent transition" id="gameContent" style={{ opacity: visibility }}>
            <Timer
                timeRemaining={timeRemaining}
            />
            <div>
                <p>
                    COMBO: <span id="currentCombo">{combo}</span>
                </p>
            </div>
            <div>
                <p>
                    POINTS MULTIPLIER: <br /><span id="currentPointsMultiplier">{pointsMultiplier.toPrecision(2)}</span>
                </p>
            </div>
        </div>
    )
};

export default GameContent;