import React from "react";

function GameContent({ visibility }) {
    return (
        <div class="gameContent" id="gameContent" style={{ opacity: visibility }}>
            <div class="timeRemaining">
                <p>TIME REMAINING: <br /><span id="timeRemaining"></span>
                </p>
            </div>
            <div>
                <p>
                    COMBO: <span id="currentCombo"></span>
                </p>
            </div>
            <div>
                <p>
                    POINTS MULTIPLIER: <br /><span id="currentPointsMultiplier"></span>
                </p>
            </div>
        </div>
    )
};

export default GameContent;