import React from "react";

function GameContent({ visibility, timeRemaining, combo, pointsMultiplier }) {
    return (
        <div className="gameContent" id="gameContent" style={{ opacity: visibility }}>
            <div className="timeRemaining">
                <p>TIME REMAINING: <br /><span id="timeRemaining">{timeRemaining}</span>
                </p>
            </div>
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