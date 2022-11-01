import React from "react";

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function GameOver({
    score,
    scoreResults,
    setScoreResults,
}) {
    return (
        <>
            <h2 className="results">
                You scored {score} points!
            </h2>
            <p className="results">
                {scoreResults}
            </p>
            <div className="initials centered">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h2 className="results">
                Please enter your initials:
            </h2>
            <div className="btnDiv centered">
                {letters.map(letter => <button className="charBtn">{letter}</button>)}
            </div>
        </>
    )
}

export default GameOver;