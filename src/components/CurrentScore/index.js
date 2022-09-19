import React from "react";

function CurrentScore({ visibility }) {
    return (
        <div class="score" id="score" style={{ opacity: visibility }}>
            <p>CURRENT SCORE:</p>
            <p id="currentScore"></p>
        </div>
    )
};

export default CurrentScore;