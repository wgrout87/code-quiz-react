import React from "react";

function CurrentScore({ visibility, score }) {
    return (
        <div className="score" id="score" style={{ opacity: visibility }}>
            <p>CURRENT SCORE:</p>
            <p id="currentScore">{score}</p>
        </div>
    )
};

export default CurrentScore;